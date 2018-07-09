import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PaginationComponent } from './pagination/pagination.component';
import { CustomersData } from '../data/customers';
import { CommonModule } from '@angular/common';



@NgModule({
    imports: [ CommonModule ],
    exports: [ PaginationComponent ],
    declarations: [PaginationComponent],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]

})

export class  SharedModule {
}



