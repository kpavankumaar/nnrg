import { CustomersComponent } from './customers/customers.component';
import { Routes  } from '@angular/router';
import { NavbarComponent } from './core/navbar/navbar.component';

export const routes: Routes = [
    { path: 'customers', component: CustomersComponent }
];

