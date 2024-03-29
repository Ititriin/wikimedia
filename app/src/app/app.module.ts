import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { WikiComponent } from './wiki.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule , RouterModule],
  declarations: [ AppComponent, WikiComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
