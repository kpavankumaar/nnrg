import { Component, OnInit } from '@angular/core';
import { CustomersDetails } from '../core/services/data.service';
@Component({
    selector: 'app-customerscomponent',
    templateUrl: 'customers.component.html'
})
export class CustomersComponent implements OnInit {
    customers;
    constructor(public customersDetails: CustomersDetails) {

    }
    ngOnInit() {

        this.customers = this.customersDetails.getCustomersData();
        // this.customers = [{ 'name': 'ravi' }, { 'name': 'pavn' }];
        
        // console.log(JSON.parse(this.customers));
        // console.log(JSON.stringify(this.customers));
    }
}

