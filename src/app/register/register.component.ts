import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../_models/model.user";
import {AccountService} from "../_services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  errorMessage: string; 
  constructor(public accountService: AccountService, public router: Router) {
  } 
  ngOnInit() {
  }  
  register() {
    this.accountService.createAccount(this.user)
    .subscribe(
      data => {
          console.log("POST Request is successful ", data);
          this.router.navigate(['/login']);
      },
      error => {
          console.log("Error", error);
      });
  }
}
 