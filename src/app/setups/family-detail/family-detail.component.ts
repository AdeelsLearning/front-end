import { Component, OnInit ,ViewChild, Input} from '@angular/core';   
import {Router} from "@angular/router"; 
import { FamilyDetail } from "../../_models/model.familyDetail";
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';  
import {ExcelService} from '../../_services/excel.service';
import { FamilyDetailsService } from '../../_services/family-details.service';  
import { User } from '../../_models/model.user';

@Component({ 
selector: 'app-family-detail',
templateUrl: './family-detail.component.html',
styleUrls: ['./family-detail.component.css']
})
export class FamilyDetailComponent implements OnInit {
      details: FamilyDetail = new FamilyDetail(); 
      displayedColumns = ['actions', 'Name', 'Age','Relation','Healthy','Disease'];
      dataSource: MatTableDataSource<FamilyDetail>;
      currentUser: User;
      familyDetails: FamilyDetail[] = [];   
      fmlyId : number=null;
      compId  : number=null;
      regId : number=null;
      fmlyName : string="";
      fmlyAge : string="";
      fmlyRelation : string="";
      fmlyHealthy : string="";
      fmlyDisease : string="";
      @Input() regIdChild:number;

      @ViewChild(MatPaginator) paginator: MatPaginator;
      @ViewChild(MatSort) sort: MatSort; 
      constructor(private router: Router,private familyDetailService:FamilyDetailsService,private excelService:ExcelService) { 
                  this.currentUser = JSON.parse(localStorage.getItem('currentUser'));  
       }    
     ngOnInit() { 
         debugger
        this.loadAllByRegId(this.regIdChild);
      }  
     deleteClick(regId:number ,fmlyId: number,fmlyName:String) {
      if(confirm("Are you sure to delete "+fmlyName)) { 
          this.familyDetailService.delete(fmlyId).subscribe(
          data => {
            this.loadAllByRegId(regId);
          },
            error => {
            console.log("Error", error);
      });  
}  
}   
editClick(familyDetail: FamilyDetail): void {
    localStorage.removeItem("editId"); 
    localStorage.setItem('editId', JSON.stringify(familyDetail.fmlyId));
 // this.router.navigate(['auth/setups/months-edit']);
}; 
private loadAllByRegId(regId:number) {
        this.familyDetailService.getAllByRegId(regId).subscribe(
        data => {
        this.familyDetails = data;  
        this.dataSource = new MatTableDataSource(this.familyDetails); 
        },
        error => {
       console.log("Error", error);
     });  
}   
    selectedRowIndex: number = -1; 
rowClick(row){
this.selectedRowIndex = row.memberId;
}   
addElement() {  
      this.details.regId = this.regId;
      this.familyDetailService.create(this.details).subscribe(
          data => { 
          this.fmlyName=""; 
          this.fmlyAge="";  
          this.fmlyRelation="";
          this.fmlyHealthy="";
          this.fmlyDisease=""; 
          console.log("POST Request is successful ", data); 
          this.loadAllByRegId(this.regId);
      },
          error => {
          console.log("Error", error);
      });  
}

} 