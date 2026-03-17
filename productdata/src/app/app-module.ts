import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { Product } from './product/product';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [App, Product],
  imports: [BrowserModule, AppRoutingModule,FormsModule,ReactiveFormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
