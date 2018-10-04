import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AuthComponent } from './auth.component'; 
import { LayoutModule } from '@angular/cdk/layout';   
import { BrowserModule } from '@angular/platform-browser'; 
import {HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';  
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';  
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../environments/environment';   
import { MatButtonModule, MatCheckboxModule,MatMenuModule, MatIconModule,MatGridListModule, MatCardModule, MatSidenavModule, MatExpansionModule, MatListModule, MatSelectModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EditUserComponent } from './edit-user/edit-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
 
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field'; 
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule,
         MatSortModule,
         MatTooltipModule, 
         MatChipsModule,
         MatButtonToggleModule } from '@angular/material';
import { AddUserComponent } from './add-user/add-user.component';
import { ConfigComponent } from './config/config.component'; 

@NgModule({ 
  declarations: [
    UserListComponent, 
    AuthComponent,
    ChangePasswordComponent,
    EditUserComponent,
    AddUserComponent,
    ConfigComponent ],
    imports: [
      CommonModule,
      AuthRoutingModule,
      LayoutModule, 
      FormsModule,
      ReactiveFormsModule,
      MatToolbarModule,
      MatButtonModule, 
      MatSidenavModule, 
      MatListModule, 
      MatCheckboxModule, 
      MatIconModule,
      MatMenuModule, 
      MatSidenavModule,
      FlexLayoutModule,
      MatExpansionModule, 
      CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatTabsModule,
    MatToolbarModule,
    MatListModule,
    MatStepperModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatChipsModule,
    MatButtonToggleModule ] 
})
export class AuthModule { }
  