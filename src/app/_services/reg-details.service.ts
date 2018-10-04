import { Injectable } from '@angular/core';
import {RegDetail} from "../_models/model.regDetail"; 
import {AppComponent} from "../app.component"; 
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Router} from "@angular/router"; 
import { RequestMethod } from '@angular/http';
@Injectable()

@Injectable({
  providedIn: 'root'
})
export class RegDetailsService { 
  regDetails: RegDetail[] = [];  
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private httpClient:HttpClient, public router: Router) { } 
  create(regDetails:RegDetail){
    return this.httpClient.post<RegDetail>(AppComponent.API_URL+'/setups/userProfile',regDetails); 
  } 
  getAll() { 
      return this.httpClient.get<RegDetail[]>(AppComponent.API_URL+'/setups/userProfile',this.options);
  }  
  delete(regId: number) { 
      return this.httpClient.delete(AppComponent.API_URL+'/setups/userProfile/'+regId,this.options);
   }  
  update(regDetails: RegDetail) {
    return this.httpClient.put(AppComponent.API_URL+'/setups/userProfile/'+ regDetails.regId, regDetails,this.options);
  } 
  getById(regId: number) {
    return this.httpClient.get<RegDetail>(AppComponent.API_URL +'/setups/userProfile/' + regId,this.options);
  }
  getByUserId(userId: number) {
    return this.httpClient.get<RegDetail>(AppComponent.API_URL +'/setups/userProfileByUserIds/' + userId,this.options);
  }
}