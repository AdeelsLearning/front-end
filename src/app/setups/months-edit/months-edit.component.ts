import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Month} from "../../_models/model.month";
import {MonthsService} from "../../_services/months.service";
import {Router} from "@angular/router";
import { User } from '../../_models/model.user';  

@Component({
  selector: 'app-months-edit',
  templateUrl: './months-edit.component.html', 
  styleUrls: ['./months-edit.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class MonthsEditComponent implements OnInit {
  month: Month = new Month();
  monthId:string;
  currentUser: User;
  errorMessage: String;   
  constructor(public monthService: MonthsService, public router: Router) {
    this.monthId = JSON.parse(localStorage.getItem('editId'));
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));  
  }  

  ngOnInit() {  
    this.monthService.getById(+this.monthId)
      .subscribe( data => {
        this.month = data; 
      });
  }

  saveClick() { 
    this.month.modifyBy = this.currentUser.username;
    this.month.modifyWhen = Date.now().toString(); 
    this.monthService.update(this.month)
    .subscribe(
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
