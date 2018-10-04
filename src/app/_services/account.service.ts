import { Injectable } from '@angular/core';
import {User} from "../_models/model.user"; 
import {AppComponent} from "../app.component"; 
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Router} from "@angular/router"; 
import { RequestMethod } from '@angular/http';
@Injectable()
export class AccountService {  
  users: User[] = [];  
  private options = { headers: new HttpHeaders().set('Content-Type', 'application/json') };
  constructor(private httpClient:HttpClient, public router: Router) { } 
  createAccount(user:User){
    return this.httpClient.post(AppComponent.API_URL+'/account/register',user); 
  } 
  getAll() { 
      return this.httpClient.get<User[]>(AppComponent.API_URL+'/account/users',this.options);
  }  
  userDisable(id: number) { 
      return this.httpClient.delete(AppComponent.API_URL+'/account/userDisable/'+id,this.options);
   } 
  userEnable(id: number) { 
    return this.httpClient.delete(AppComponent.API_URL+'/account/userEnable/'+id,this.options);
 } 
  updateUser(user: User) {
    return this.httpClient.put(AppComponent.API_URL+'/account/users/'+ user.id, user,this.options);
  } 
  getUserById(id: number) {
    return this.httpClient.get<User>(AppComponent.API_URL +'/account/users/' + id,this.options);
  }
}
  