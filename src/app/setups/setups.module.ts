import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { SetupsRoutingModule } from './setups-routing.module'; 
import { MonthsComponent } from './months/months.component';
import { MonthsAddComponent } from './months-add/months-add.component';
import { MonthsEditComponent } from './months-edit/months-edit.component';
 
 
import { LayoutModule } from '@angular/cdk/layout';   
import { BrowserModule } from '@angular/platform-browser'; 
import {HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';  
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router';  
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../../environments/environment';   
import { MatButtonModule, MatCheckboxModule,MatMenuModule, MatIconModule,MatGridListModule,
         MatCardModule, MatSidenavModule, MatExpansionModule, MatListModule, MatSelectModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout'; 
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
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FamilyDetailComponent } from './family-detail/family-detail.component';
import { RegDiseasesComponent } from './reg-diseases/reg-diseases.component'; 

@NgModule({ 
  declarations: [MonthsComponent, MonthsAddComponent, MonthsEditComponent, UserProfileComponent, FamilyDetailComponent, RegDiseasesComponent
              ],
     imports: [
              CommonModule,
              SetupsRoutingModule,
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
              MatInputModule,
              MatExpansionModule,
              MatDatepickerModule,
              MatNativeDateModule,
              MatTableModule,
              MatPaginatorModule,
              MatSortModule,
              MatCheckboxModule,
              MatSelectModule,
              MatTooltipModule,
              MatChipsModule,
              MatButtonToggleModule ]   
})
export class SetupsModule { }
 