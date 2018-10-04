import {Component, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup,Validators,FormControl} from '@angular/forms'; 
import { RegDetail } from '../../_models/model.regDetail';  
import {RegDetailsService} from "../../_services/reg-details.service";
import {Router} from "@angular/router"; 
import { User } from '../../_models/model.user';  
import { MatStepper } from '@angular/material';
export interface Gender {
  name: string;
  value: string;
}
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html', 
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  regDetail: RegDetail = new RegDetail();  
  detail: RegDetail[] = [];   
  currentUser: User;
  rGender:string;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup; 
  //@Output() 
  regIdParent:number;
  constructor(private _formBuilder: FormBuilder,public regDetailsService: RegDetailsService, public router: Router) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));  
  }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({ 
      fregName: ['', Validators.required],
      fregSuffix: ['', Validators.required],
      fregGender: ['', Validators.required],
      fregAge: ['', Validators.required],
      fregContactOther: ['', Validators.required],
      fregContactMob: ['', Validators.required],
      fregAddress: ['', Validators.required],
      fregIllnessDetail: ['', Validators.required],
      fregConsultantName: ['', Validators.required],
      fregLastVisited: ['', Validators.required],
      fregDueVisit: ['', Validators.required],
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    }); 
    this.regDetailsService.getByUserId(this.currentUser.usrId)
    .subscribe( data => {
      this.regDetail = data; 
    });

  }
  
  saveClick() {
    this.regDetail.regCreatedBy = this.currentUser.username; 
    this.regDetail.regGender = this.rGender;
    this.regDetail.usrId = this.currentUser.usrId;
    debugger
    this.regDetailsService.create(this.regDetail).subscribe(
      data => {
         this.regDetail = data; 
         this.regIdParent=this.regDetail.regId;
          console.log("POST Request is successful ", data); 
      },
      error => { 
          console.log("Error", error);
      });
  }  
  onChange(regGender) {
    console.log(regGender);
    this.rGender = regGender.value;
    // ... do other stuff here ...
}
  submit(){
   alert('submitted');
  }
  genderControl = new FormControl('', [Validators.required]);
  genders: Gender[] = [
    {name: 'Male', value: 'Male'},
    {name: 'Female', value: 'Female'} 
  ];
}
