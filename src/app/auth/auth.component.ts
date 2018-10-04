import { ObservableMedia, MediaChange } from '@angular/flex-layout';
import { Subscription } from 'rxjs';
import { Component, OnInit ,Input} from '@angular/core'; 
import { User } from '../_models/model.user';
import {AuthService} from "../_services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  opened = true;
  over = 'side';
  expandHeight = '42px';  
  collapseHeight = '42px';
  displayMode = 'flat'; 
  errorMessage:string;
  // overlap = false;
  currentUser: User;
  watcher: Subscription;

  constructor(private authService :AuthService, private router: Router,media: ObservableMedia) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser')); 
    this.watcher = media.subscribe((change: MediaChange) => {
      if (change.mqAlias === 'sm' || change.mqAlias === 'xs') {
        this.opened = false;
        this.over = 'over';
      } else {
        this.opened = true;
        this.over = 'side';
      }
    });
  }

  ngOnInit() {

  }
  logOut() {
      localStorage.removeItem('currentUser');
      this.router.navigate(['#']); 
  }
  goHome() { 
    this.router.navigate(['home']); 
}

selectedLink: String = ''; 
linkClick(linkId){
   this.selectedLink = linkId;
 } 
} 
