import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductViewComponent } from './product-view/product-view.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations'
import { HttpService } from './services/httpservices.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
