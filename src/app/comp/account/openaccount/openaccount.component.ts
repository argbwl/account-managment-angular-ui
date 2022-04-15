import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { OpenactdialogComponent } from 'src/app/dialog/openactdialog/openactdialog.component';
import { AccoutserviceService } from 'src/app/service/accoutservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import {AfterViewInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { BehaviorSubject, Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-openaccount',
  templateUrl: './openaccount.component.html',
  styleUrls: ['./openaccount.component.css']
})
export class OpenaccountComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  accountList : any;
  displayedColumns: string[] = ['id', 'accName', 'accNum', 'accStatus'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, 
              private accountService : AccoutserviceService, 
              private router: Router,
              private activatedRoute : ActivatedRoute) {

  }

  accounts = new Observable<Array<{ name: string; }>>();
  
  ngOnInit(): void {
    //this.accountList =  this.accountService.getTodaysAccountList();
    // console.log("loading data")
    // console.log(this.accountList)
    // this.dataSource = this.accountList;
    this.getAllTodaysAccountList();
  }

  openDialog() {
    const dialogRef = this.dialog.open(OpenactdialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getAllTodaysAccountList(){
    this.accountService.getTodaysAccountList()
                       .subscribe({
                         next:(res)=>{
                           this.dataSource = new MatTableDataSource(res);
                           this.dataSource.paginator = this.paginator;
                           this.dataSource.sort = this.sort;
                         },
                         error:(err)=>{
                           alert("error fetching data");
                         }
                       })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }  
}
