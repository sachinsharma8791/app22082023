import {Injectable} from'@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({providedIn:'root'
})
export class RoomsHttpService{
   localUrl='http://13.51.72.52:3000'
   headers =new HttpHeaders()
   .set('content-type', 'application/json')
    .set('Access-Control-Allow-Origin', '*');
    constructor (private httpService:HttpClient){}
roomsList(){
    let url=this.localUrl + '/api/v1/rooms/list?';
    return this.httpService.get(url, this.getHeaders());
}


    getHeaders() {
        return {
            headers: this.headers
        }   
        }
}