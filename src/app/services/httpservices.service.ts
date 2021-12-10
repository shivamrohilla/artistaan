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

        
        return this.http.get(url)
    }


}