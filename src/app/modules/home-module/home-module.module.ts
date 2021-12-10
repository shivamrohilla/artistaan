import { NgModule } from "@angular/core";
import { HomeModuleRouting } from "./home-module-routing.module";
import { CarouselComponent } from "./home-component/carousel/carousel.component";
import { ProductListComponent } from "./home-component/product-list/product-list.component";
import { UspComponent } from "./home-component/usp/usp.component";
import { CommonModule } from '@angular/common';
import { CarouselModule } from "ngx-bootstrap/carousel";

import { HttpClientModule } from "@angular/common/http";

import { HomeComponent } from "./home-component/home.component";
import { HttpService } from "src/app/services/httpservices.service";


@NgModule({

    declarations:[
        CarouselComponent,
        ProductListComponent , 
        UspComponent,
        HomeComponent
    ],

    imports:[
        HomeModuleRouting,
        CommonModule ,
        CarouselModule , 
        HttpClientModule
    ],

    providers:[HttpService],


})

export class HomeModule{


}