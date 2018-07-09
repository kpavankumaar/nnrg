import { Component, OnInit } from '@angular/core';
import { CustomersDetails } from '../core/services/data.service';
@Component({
    templateUrl: 'orders.component.html'
})
export class OrdersComponent implements OnInit {
    orders;
    customers;
    itemCost;
    totalValue;
    totalValArray;

    constructor(public customersDetails: CustomersDetails) {
    }
    ngOnChange(totalValue) {
        console.log('*************** ng onChange ******');
        console.log(totalValue);
        console.log(totalValue.currentValue);
        console.log(totalValue.previousValue);
    }
    ngOnInit() {
        this.customers = this.customersDetails.getCustomersData();
        // this.orders = this.customers.orders;
        console.log(this.customers);
        // "productName": "Basketball",
        //     "itemCost": 7.99
        this.totalValArray = this.customers.map((obj) => {
            this.itemCost = obj.orders.map(function(product) {
                return product.itemCost;
                // let newObj = {};
                // return newObj[obj.firstName] = product.itemCost;
            });
            function reduceMethod (accu, currentval) {
                console.log('*************** accu value ******');
                console.log(accu);
                console.log('*************** current value ******');
                console.log(currentval);
                accu = accu + currentval;
                console.log('*************** after adding current val accu value ******');
                console.log(accu);
                return accu;
            }
            this.totalValue = this.itemCost.reduce(reduceMethod, 0 );
            console.log('*************** total value ******');
            console.log(this.totalValue);
            let newObj = {};
            newObj['firstName'] = obj.firstName;
            newObj['orders'] = obj.orders;
            newObj['totalValue'] = this.totalValue;
            return newObj;
        });
        console.log(this.totalValArray);
    }
}

