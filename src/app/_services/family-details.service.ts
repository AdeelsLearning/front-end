import { Injectable } from '@angular/core';
import {FamilyDetail} from "../_models/model.familyDetail"; 
import {AppComponent} from "../app.component"; 
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Router} from "@angular/router"; 
import { RequestMethod } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class FamilyDetailsService {
  familyDetail: FamilyDetail[] = [];  
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private httpClient:HttpClient, public router: Router) { } 
  create(familyDetail:FamilyDetail){
    return this.httpClient.post(AppComponent.API_URL+'/setups/userProfile/familyDetails',familyDetail); 
  } 
  getAll() { 
      return this.httpClient.get<FamilyDetail[]>(AppComponent.API_URL+'/setups/userProfile/familyDetails',this.options);
  }  
  getAllByRegId(regId: number){
    return this.httpClient.get<FamilyDetail[]>(AppComponent.API_URL+'/setups/userProfile/familyDetails/'+ regId,this.options);
  }
  delete(fmlyId: number) { 
      return this.httpClient.delete(AppComponent.API_URL+'/setups/userProfile/familyDetails/'+fmlyId,this.options);
   }  
  update(familyDetail: FamilyDetail) {
    return this.httpClient.put(AppComponent.API_URL+'/setups/userProfile/familyDetails/'+ familyDetail.fmlyId, familyDetail,this.options);
  } 
  getByfmlyId(fmlyId: number) {
    return this.httpClient.get<FamilyDetail>(AppComponent.API_URL +'/setups/userProfile/familyDetails/' + fmlyId,this.options);
  }
}