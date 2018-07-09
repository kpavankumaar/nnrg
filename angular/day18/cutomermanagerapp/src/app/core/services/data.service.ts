import { Injectable } from '@angular/core';
import { CustomersData } from '../../data/customers';

@Injectable()
export class CustomersDetails {
    customersData ;
    constructor() {
        this.customersData  =  CustomersData;
    }
    getCustomersData() {
        console.log(typeof this.customersData);
        return this.customersData;
        // console.log(typeof this.customersData);
        // return this.customersData;
    }

}
