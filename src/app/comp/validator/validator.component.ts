import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AccoutserviceService } from 'src/app/service/accoutservice.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Account } from 'src/app/model/account.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-validator',
  templateUrl: './validator.component.html',
  styleUrls: ['./validator.component.css']
})
export class ValidatorComponent implements OnInit {

  dataSource: MatTableDataSource<Account>;
  accountList : any;
  displayedColumns: string[] = ['id', 'accName', 'accNum', 'accStatus', 'validateStatus'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private accountService : AccoutserviceService, private router: Router) {
   
  }

  ngOnInit(): void {
    this.getAllTodaysAccountList();
  }

  getAllTodaysAccountList(){
    this.accountService.getAccountList()
                       .subscribe({
                         next:(res)=>{
                           console.log(JSON.stringify(res));
                           this.dataSource = new MatTableDataSource(res);
                           this.dataSource.paginator = this.paginator;
                           this.dataSource.sort = this.sort;
                         },
                         error:(err)=>{
                           //alert("error fetching data");
                           Swal.fire('Server Down!', 'Error Fetching Data!', 'error');
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
