import { Component, NgModule, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/api/api.response';
import { AccoutserviceService } from 'src/app/service/accoutservice.service';
import { Account } from 'src/app/model/account.model';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { PageEvent } from '@angular/material/paginator';
import { MatFormFieldControl } from '@angular/material/form-field';
import { MatSort } from '@angular/material/sort';


export interface PeriodicElement {
  name: string;
  position1: number;
  weight: number;
  symbol: string;

  // id: number;
  //   accountName: String;
  //   accountNumber: String;
  //   accountStatus: String;
}


const ELEMENT_DATA: Account[] = [
  {id: 1, accName: 'Hydrogen123', accNo: '1.0079', accStatus: 'H'}
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-system-info',
  templateUrl: './system-info.component.html',
  styleUrls: ['./system-info.component.css']
})
export class SystemInfoComponent implements OnInit {

 
  dataSource: MatTableDataSource<any>;
  accountList : any;
  displayedColumns: string[] = ['id', 'accName', 'accNum', 'accStatus'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

 //accounts: Observable<ApiResponse>;
  constructor(private accountService : AccoutserviceService, private router: Router) {
   
   
  }


  ngOnInit(): void {
    // this.accountList =  this.accountService.getAccountList();
    // console.log("loading data")
    // console.log(this.accountList)
    // this.dataSource = this.accountList;
    this.getAllTodaysAccountList();
  }

  //dataSource = this.accountService.getAccount();//ELEMENT_DATA;
  //this.accountService.getAccount();

  getAllTodaysAccountList(){
    this.accountService.getAccountList()
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

  routeNavbar(){
    this.router.navigate(['navbar']);
  }

}
