import { Component } from '@angular/core'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  { 
  constructor(private router: Router) { } 
    title = 'Community Services';
    static API_URL="http://localhost:8080"; 
} 