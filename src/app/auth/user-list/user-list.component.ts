import { Component, OnInit ,ViewChild} from '@angular/core';   
import {Router} from "@angular/router";
import { AccountService } from '../../_services/account.service';
import { User } from '../../_models/model.user';  
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material'; 
import * as jspdf from 'jspdf';   
import html2canvas from 'html2canvas';  
import {ExcelService} from '../../_services/excel.service';
 
@Component({templateUrl: 'user-list.component.html'})
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
}) 
 
export class UserListComponent implements OnInit {
  displayedColumns = ['actions','id', 'fullName', 'username','usrActive'];
  dataSource: MatTableDataSource<User>;
  currentUser: User;
  users: User[] = [];   
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort; 
	constructor(private router: Router,private accountService:AccountService,private excelService:ExcelService) { 
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));  
  } 

  ngOnInit() {
    this.loadAllUsers(); 
  } 



  userEnable(usrId: number,fullName:string) {
  if(confirm("Are you sure to Enable "+fullName)) { 
    this.accountService.userEnable(usrId).subscribe(
      data => {
        this.loadAllUsers();
      },
      error => {
          console.log("Error", error);
      });  
  }
}    
userDisable(usrId: number,fullName:string) {
  if(confirm("Are you sure to Disable "+fullName)) { 
    this.accountService.userDisable(usrId).subscribe(
      data => {
        this.loadAllUsers();
      },
      error => {
          console.log("Error", error);
      });  
  }
}  

addUser(): void { 
  this.router.navigate(['auth/add-user']);
}; 
editUser(user: User): void {
  localStorage.removeItem("editUserId");
 // localStorage.setItem("editUserId", user.id.toString());
  localStorage.setItem('editUserId', JSON.stringify(user.id));
  this.router.navigate(['auth/edit-user']);
}; 
private loadAllUsers() {
    this.accountService.getAll().subscribe(
      data => {
        this.users = data; 
        this.dataSource = new MatTableDataSource(this.users);
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
    this.excelService.exportAsExcelFile(this.users, 'sample');
  } 

 selectedRowIndex: number = -1; 
 rowClick(row){
    this.selectedRowIndex = row.id;
  }
}
