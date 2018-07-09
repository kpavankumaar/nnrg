import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CustomersDetails } from '../core/services/data.service';

@NgModule({
    imports: [ RouterModule],
    exports: [ NavbarComponent],
    providers: [CustomersDetails ],
    declarations: [NavbarComponent]
})
export class CoreModule {
}

