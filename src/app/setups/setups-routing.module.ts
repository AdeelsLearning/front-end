import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { MonthsComponent } from './months/months.component';
import { MonthsAddComponent } from './months-add/months-add.component';
import { MonthsEditComponent } from './months-edit/months-edit.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  { path: 'userProfile', component: UserProfileComponent } , 
  { path: 'months', component: MonthsComponent },
  { path: 'months-add', component: MonthsAddComponent },
  { path: 'months-edit', component: MonthsEditComponent }, 
  
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupsRoutingModule { }
  