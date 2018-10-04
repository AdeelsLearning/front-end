import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../_models/model.user";
import {AccountService} from "../../_services/account.service";
import {Router} from "@angular/router";

@Component({ 
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AddUserComponent implements OnInit { 
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
          this.router.navigate(['/auth/user']);
      },
      error => {
          console.log("Error", error);
      });
  }
  cancel() { 
          this.router.navigate(['/auth/user']); 
  }
}
