import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Month} from "../../_models/model.month";
import {MonthsService} from "../../_services/months.service";
import {Router} from "@angular/router";
import { User } from '../../_models/model.user'; 
import { MatCheckbox } from '@angular/material';
@Component({
  selector: 'app-months-add',
  templateUrl: './months-add.component.html',
  styleUrls: ['./months-add.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MonthsAddComponent implements OnInit { 
  month: Month = new Month(); 
  currentUser: User;
  errorMessage: String;  
  constructor(public monthService: MonthsService, public router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));  
  } 

  ngOnInit() {
  }
  saveClick() {
    this.month.createdBy = this.currentUser.username;
    this.month.createdWhen = Date.now().toString();
    this.month.modifyBy =null;
    this.month.modifyWhen = null; 
    this.monthService.create(this.month).subscribe(
      data => {
          console.log("POST Request is successful ", data);
          this.router.navigate(['/auth/setups/months']);
      },
      error => {
          console.log("Error", error);
      });
  }
  cancel() { 
          this.router.navigate(['/auth/setups/months']); 
  }

}
