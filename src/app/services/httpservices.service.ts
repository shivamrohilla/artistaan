import { Injectable } from "@angular/core";
import {HttpClient} from "@angular/common/http"

@Injectable({
    providedIn: "root"
})

export class HttpService{

    response :any
    constructor(private http : HttpClient){

    }
    get(url:string){

        
        this.http.get(url).subscribe((responseData) =>{

            this.response =responseData;
            console.log(responseData);

        }
        )

        return this.response
    }


}