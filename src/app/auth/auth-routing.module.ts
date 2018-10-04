import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; 
import { AuthComponent } from './auth.component';
import { UserListComponent } from './user-list/user-list.component';
import { ChangePasswordComponent  } from './change-password/change-password.component'; 
import { EditUserComponent } from './edit-user/edit-user.component';  
import { AddUserComponent } from './add-user/add-user.component';
import { SetupsModule} from "../setups/setups.module";
import { ConfigComponent } from './config/config.component';

const routes: Routes =[{
  path: '', component: AuthComponent, children: [
      { path: 'user', component: UserListComponent } ,
      { path: 'edit-user', component: EditUserComponent } ,
      { path: 'add-user', component: AddUserComponent } ,
      { path: 'chpass', component: ChangePasswordComponent }, 
      { path: 'config', component: ConfigComponent },
      { path: 'setups', loadChildren: '../setups/setups.module#SetupsModule' },
  ]
}]; 
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
     