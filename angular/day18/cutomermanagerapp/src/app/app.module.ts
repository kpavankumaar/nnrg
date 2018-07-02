import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { routes } from './routes';
import { CustomersModule } from './customers/customers.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(routes), CustomersModule, CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
