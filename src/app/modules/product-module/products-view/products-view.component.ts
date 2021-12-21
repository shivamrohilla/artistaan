import { Component, OnInit } from "@angular/core";
import { HttpService } from "src/app/services/httpservices.service";

 @Component({

    selector: 'products-view',
    templateUrl:'products-view.component.html',
    styleUrls:['products-view.component.css']
 })
export class ProductsViewComponent implements OnInit {

    images=[]
    constructor(private httpservice: HttpService){

    }
    ngOnInit(): void {
         
        this.httpservice.get("http://localhost:3100/api/v1.0/user/products")
        .subscribe((data:any)=>{

            
            this.images = data.data;
        })

    }

    

}