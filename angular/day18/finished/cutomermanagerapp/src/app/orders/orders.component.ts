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
    ngOnInit() {
        this.customers = this.customersDetails.getCustomersData();
        // this.orders = this.customers.orders;
        console.log(this.customers);
        // "productName": "Basketball",
        //     "itemCost": 7.99
        this.totalValArray = this.customers.map((obj) => {
            this.itemCost = obj.orders.map(function(product) {
                let newObj = {};
                return newObj[obj.firstName] = product.itemCost;
            });
            
             this.totalValue = this.itemCost.reduce(function(accu, currentval) {
                console.log('*************** accu value ******');
                console.log(accu);
                console.log('*************** current value ******');
                console.log(currentval);
                accu = accu + currentval;
                console.log('*************** after adding current val accu value ******');
                console.log(accu);
                 return accu;
            }, 0 );
            return this.totalValue;
        });
        console.log(this.totalValArray);
    }
}

