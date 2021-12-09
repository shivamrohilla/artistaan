import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { OnInit } from "@angular/core";



@Component({
    selector: 'app-product-list',
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit {

    constructor(private http: HttpClient){

    }
    images = []
    nothovered = true;

    
    ngOnInit(){


       this.http.get("http://localhost:3100/api/v1.0/user/products").subscribe((response:any)=>{

            

            this.images = response.data

        })


    }

    getBorder(event : any){

        
        console.log(event.target);
    }
    removeBorder(event : any){

       

        console.log(event.target);
    }


    


}