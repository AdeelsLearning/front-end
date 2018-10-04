import { Component, OnInit ,ViewChild} from '@angular/core';   
import {Router} from "@angular/router";
import { AccountService } from '../../_services/account.service';
import { Month} from '../../_models/model.month';  
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material'; 
import * as jspdf from 'jspdf';   
import html2canvas from 'html2canvas';  
import {ExcelService} from '../../_services/excel.service';
import { MonthsService } from '../../_services/months.service';
 

@Component({
  selector: 'app-months',
  templateUrl: './months.component.html',
  styleUrls: ['./months.component.css']
})
export class MonthsComponent implements OnInit {
  displayedColumns = ['actions', 'monthCode', 'monthDesc','monthActive'];
  dataSource: MatTableDataSource<Month>;
  currentUser: Month;
  months: Month[] = [];   
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort; 
	constructor(private router: Router,private monthService:MonthsService,private excelService:ExcelService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));  
  } 

  ngOnInit() {
    this.loadAll(); 
  } 



deleteClick(monthId: number,monthDesc:String) {
  if(confirm("Are you sure to delete "+monthDesc)) { 
    this.monthService.delete(monthId).subscribe(
      data => {
        this.loadAll();
      },
      error => {
          console.log("Error", error);
      });  
  }
}     

addClick(): void {  
  this.router.navigate(['auth/setups/months-add']);
}; 
editClick(month: Month): void {
  localStorage.removeItem("editId");
 // localStorage.setItem("editUserId", user.id.toString());
  localStorage.setItem('editId', JSON.stringify(month.monthId));
  this.router.navigate(['auth/setups/months-edit']);
}; 
private loadAll() {
    this.monthService.getAll().subscribe(
      data => {
        this.months = data;  
        this.dataSource = new MatTableDataSource(this.months);
        this.ngAfterViewInit(); 
      },
      error => {
          console.log("Error", error);
      }); 
}  
ngAfterViewInit() {
  this.dataSource.paginator = this.paginator;
  this.dataSource.sort = this.sort;
  }

applyFilter(filterValue: string) {
  filterValue = filterValue.trim(); // Remove whitespace
  filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  this.dataSource.filter = filterValue;
  } 
  exportAsXLSX():void {
    this.excelService.exportAsExcelFile(this.months, 'sample');
  } 
  
 selectedRowIndex: number = -1; 
 rowClick(row){
    this.selectedRowIndex = row.monthId;
  }
}