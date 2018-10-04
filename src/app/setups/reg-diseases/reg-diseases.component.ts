import { Component, OnInit ,ViewChild, Input} from '@angular/core';   
import {Router} from "@angular/router";  
import {ExcelService} from '../../_services/excel.service'; 
import { User } from '../../_models/model.user';
import { DiseaseDetail } from '../../_models/model.diseaseDetail';
import { DiseaseDetailsService } from '../../_services/disease-details.service';

@Component({
  selector: 'app-reg-diseases',
  templateUrl: './reg-diseases.component.html',
  styleUrls: ['./reg-diseases.component.css']
})
export class RegDiseasesComponent implements OnInit { 
  public show:boolean = true;
  currentUser: User;
  RegDiseases: DiseaseDetail = new DiseaseDetail(); 
  selectedOptions: string[] = [];
  diseasesList: string[] = ['TBM',
                            'Headache',
                            'Vision Problem',  
                            'MI',
                            'CCF',  
                            'Calung', 
                            'APD',
                            'Hernia',
                            'Malabsorption',];

  @Input() regIdChild:number;
  constructor(private router: Router,private diseaseDetailsService:DiseaseDetailsService,private excelService:ExcelService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));  
}     
  ngOnInit(){
  }
 
  addDisease() {  
    this.RegDiseases.rRegId = this.regIdChild;
    this.diseaseDetailsService.create(this.RegDiseases).subscribe(
        data => {  
        console.log("POST Request is successful ", data); 
        this.router.navigate(['/home']); 
    },
        error => {  
        console.log("Error", error);
    });  
}
  onNgModelChange(event){
    console.log('on ng model change', event);
    if(this.selectedOptions.length>0){
      this.show= true;
    }else  this.show= false;
  }
}