import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    CartComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
