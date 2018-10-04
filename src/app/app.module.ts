import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core'; 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component'; 
import { AuthService } from "./_services/auth.service";
import {HttpModule} from "@angular/http";
import { HttpClientModule } from '@angular/common/http';
import {AccountService} from "./_services/account.service"; 
import { LazyLoadModule } from './lazy-load/lazy-load.module';
import {UrlPermission} from "./urlPermission/url.permission";  
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatListModule, MatSelectModule, MatDatepickerModule } from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout'; 
 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import { NgProgressModule } from '@ngx-progressbar/core';
import { NgProgressRouterModule } from '@ngx-progressbar/router'; 
import { NotfoundComponent } from './notfound/notfound.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';  
import { SharedModule } from './shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  
import { ExcelService } from './_services/excel.service';
@NgModule({
  declarations: [
    AppComponent, 
    LoginComponent,
    RegisterComponent, 
    NotfoundComponent,  
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule, 
    NgProgressModule.forRoot(),
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule, 
    HttpClientModule,
    MatDatepickerModule,
    NgProgressRouterModule, 
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }), 
    HttpModule, 
    LazyLoadModule 
  ],
  providers: [AuthService,AccountService,UrlPermission,ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }  
    