import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {User} from "../../_models/model.user";
import {AccountService} from "../../_services/account.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-user', 
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditUserComponent implements OnInit {
  user: User = new User();
  userId:string;
  errorMessage: string; 
  constructor(public accountService: AccountService, public router: Router) {
    this.userId = JSON.parse(localStorage.getItem('editUserId'));
  }  

  ngOnInit() {  
    this.accountService.getUserById(+this.userId)
      .subscribe( data => {
        this.user = data; 
      });
  }

  onSubmit() { 
    this.accountService.updateUser(this.user)
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
