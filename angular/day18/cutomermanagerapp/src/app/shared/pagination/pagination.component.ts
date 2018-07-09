import { Component, OnInit, Output, EventEmitter  } from '@angular/core';
import { CustomersDetails } from '../../core/services/data.service';

@Component({
    selector: 'app-pagination',
    templateUrl: 'pagination.component.html'
})

export class  PaginationComponent implements OnInit {
    constructor(public customerDetails: CustomersDetails) {
    }
    identifyPageNo;
    datalength;
    lengthValue;
    pages = [];
    customers;
    @Output() custInfo = new EventEmitter()  ;
    customersInformation; // array of 10 objects containing userinformation from customerDetails array
    finalVal; // used to add final value for slicing data.
    initValue; // used as initial value for slicing customers data.
    pageNo = 0; // page number is used for getting one two three etc , values in pagination
    ngOnInit() {
        this.customers = this.customerDetails.getCustomersData();
        this.datalength = this.customers.length;
        this.lengthValue = this.datalength.toString();
        if (this.lengthValue.length === 2) {
            this.createPages(this.lengthValue.charAt(0));
        }
        if (this.datalength > 10) {
            this.initValue = 0;
            this.finalVal = 10;
            // this.pages.push(this.customers.slice(this.initValue, this.finalVal));

        } else {}
    }
    createPages(NoOfPages: number ) {
        if (NoOfPages * 10 < this.datalength) {
            NoOfPages = +NoOfPages + 1 ;
        }
        for ( let i = 0; i < NoOfPages ; i++) {
            this.initValue = i * 10;
            this.finalVal = ( i + 1 ) * 10 ;
            this.pageNo = this.pageNo + 1;
            // console.log('***************** no of pages *************');
            // console.log(this.customers);
            // console.log(this.customers.slice(this.initValue, this.finalVal));
            let arr = this.customers.slice(this.initValue, this.finalVal);
            arr.splice(0, 0, this.pageNo);
            this.pages.push(arr);
            // this.pages.unshift(this.pageNo);
        }
        console.log(this.pages);
    }
    // pagination load page
    loadPage(val) {
        console.log(val);
        this.identifyPageNo = val;
        // this.pages.slice(1, this.pages.length );
        this.pages.map((obj) => {
            const test = obj.slice(0, 1);
            if (val === test[0]) {
                this.customersInformation = obj.slice(1, obj.length);
                console.log( this.customersInformation );
                return this.customersInformation;
            }
        });
        this.custInfo.emit(this.customersInformation);
    }
    changePage(val) {
        console.log(val);
        console.log('page number ')
        console.log(this.identifyPageNo);
        if ( this.identifyPageNo >= 1 && this.identifyPageNo <= 3) {
            this.loadPage(+this.identifyPageNo + +val);
        }
    }
}
