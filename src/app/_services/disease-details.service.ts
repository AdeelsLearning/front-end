import { Injectable } from '@angular/core';
import {RegDetail} from "../_models/model.regDetail"; 
import {AppComponent} from "../app.component"; 
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Router} from "@angular/router"; 
import { RequestMethod } from '@angular/http';
import { DiseaseDetail } from '../_models/model.diseaseDetail';
@Injectable({
  providedIn: 'root'
})
export class DiseaseDetailsService {
  diseaseDetail: DiseaseDetail[] = [];  
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private httpClient:HttpClient, public router: Router) { } 
  create(diseaseDetail:DiseaseDetail){
    return this.httpClient.post<DiseaseDetail>(AppComponent.API_URL+'/setups/userProfile/regDiseases',diseaseDetail); 
  } 
  getAll() { 
      return this.httpClient.get<DiseaseDetail[]>(AppComponent.API_URL+'/setups/userProfile/regDiseases',this.options);
  }  
  delete(rDsId: number) { 
      return this.httpClient.delete(AppComponent.API_URL+'/setups/userProfile/regDiseases/'+rDsId,this.options);
   }  
  update(diseaseDetail: DiseaseDetail) {
    return this.httpClient.put(AppComponent.API_URL+'/setups/userProfile/'+ diseaseDetail.rDsId, diseaseDetail,this.options);
  } 
  getById(rDsId: number) {
    return this.httpClient.get<DiseaseDetail>(AppComponent.API_URL +'/setups/userProfile/' + rDsId,this.options);
  }
  getByRegId(rRegId: number) {
    return this.httpClient.get<DiseaseDetail>(AppComponent.API_URL +'/setups/userProfileByRegIds/' + rRegId,this.options);
  }
} 