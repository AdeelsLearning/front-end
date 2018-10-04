import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {User} from "../_models/model.user";
import {AuthService} from "../_services/auth.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  user: User=new User();
  errorMessage:string;
  constructor(private authService :AuthService, private router: Router) { }


 
  ngOnInit() {
  }
 
  login(){
    localStorage.removeItem('currentUser');
    this.router.navigate(['/auth']);
     this.authService.logIn(this.user)
      .subscribe(data=>{
        this.router.navigate(['/auth']);
        },err=>{
        this.errorMessage="Sorry :  Username or password is incorrect";
        }
      )  
  }
}
