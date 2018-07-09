import { NgModule } from '@angular/core';
import { OrdersComponent } from './orders.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [CommonModule],
    exports: [OrdersComponent],
    declarations: [OrdersComponent]
})

export class OrdersModule {
}

