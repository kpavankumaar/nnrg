import { NgModule } from '@angular/core';
import { CustomersComponent } from './customers.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [ CommonModule, SharedModule ],
    declarations: [CustomersComponent]
})
export class CustomersModule {
}
