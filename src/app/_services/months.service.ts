import { Injectable } from '@angular/core';
import { Month } from '../_models/model.month'; 
import {User} from "../_models/model.user"; 
import {AppComponent} from "../app.component"; 
import { HttpClient } from "@angular/common/http";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})
export class MonthsService { 
  months: Month[] = [];  
  constructor(private httpClient:HttpClient, public router: Router) { } 
  create(month:Month){
    return this.httpClient.post(AppComponent.API_URL+'/setups/addmonth',month); 
  } 
  getAll() {
      return this.httpClient.get<Month[]>(AppComponent.API_URL+'/setups/months');
  }  
  delete(monthId: number) { 
      return this.httpClient.delete(AppComponent.API_URL+'/setups/months/'+monthId);
   } 
  update(month: Month) {
    return this.httpClient.put(AppComponent.API_URL+'/setups/months/'+ month.monthId, month);
  } 
  getById(monthId: number) {
    return this.httpClient.get<Month>(AppComponent.API_URL +'/setups/months/' + monthId);
  }
}
