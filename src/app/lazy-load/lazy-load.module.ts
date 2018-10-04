import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes,RouterModule } from '@angular/router';  

import {AuthModule} from "../auth/auth.module";

import {LoginComponent} from "../login/login.component";
import {RegisterComponent} from "../register/register.component"; 
import {UrlPermission} from "../urlPermission/url.permission";  
import { NotfoundComponent } from '../notfound/notfound.component'; 
const routes: Routes = [   
    //  {path: 'auth', loadChildren: '../auth/auth.module#AuthModule' }, 
     {path: 'auth', loadChildren: '../auth/auth.module#AuthModule',canActivate: [UrlPermission] }, 
     {path: 'home', loadChildren: '../auth/auth.module#AuthModule',canActivate: [UrlPermission] }, 
     { path: 'login', component: LoginComponent },
     { path: 'register', component: RegisterComponent },
 
   {path: '**', redirectTo: 'login'},
]

@NgModule({ 
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LazyLoadModule { } 
  