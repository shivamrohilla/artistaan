import { Component } from "@angular/core";
import { OnInit } from "@angular/core";
import { HttpService } from "src/app/services/httpservices.service";



@Component({
    selector: 'app-product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

    constructor(private httpService: HttpService){

    }
    images : String[] = []
    ngOnInit(){


       this.httpService.get("http://localhost:3100/api/v1.0/user/products").subscribe((response:any)=>{

            

            this.images = response.data

        })

        console.log("Reloaded")
    }


}