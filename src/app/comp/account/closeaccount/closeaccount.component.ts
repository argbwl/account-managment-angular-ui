import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AccoutserviceService } from 'src/app/service/accoutservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-closeaccount',
  templateUrl: './closeaccount.component.html',
  styleUrls: ['./closeaccount.component.css']
})
export class CloseaccountComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  // accountList : any;
  displayedColumns: string[] = ['id', 'accName', 'accNum', 'accStatus','closingSts'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog, 
              private accountService : AccoutserviceService, 
              private router: Router,
              private activatedRoute : ActivatedRoute) {

  }

  accounts = new Observable<Array<{ name: string; }>>();
  opened = false;
  
  ngOnInit(): void {
    this.getAllAccountListForClose();
  }

  getAllAccountListForClose(){
    this.accountService.getAccountListForClose()
                       .subscribe({
                         next:(res)=>{
                           this.dataSource = new MatTableDataSource(res);
                           this.dataSource.paginator = this.paginator;
                           this.dataSource.sort = this.sort;
                         },
                         error:(err)=>{
                           alert("error fetching data");
                           console.log(err);
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

  closeAccount(data:string){
    //alert(data);
    console.log(data);
    if(confirm("Closing Account will take 7 Days to process,\nPlease confirm if need to close account for below account\nAccount Number ["+data+"]")) {
      this.accountService.closeAccount(data)
                         .subscribe({
                            next:(res)=>{
                              alert("Account Closing Submitted for account number :: "+data);
                              this.getAllAccountListForClose();
                            },
                            error:(er)=>{
                              alert("Account Closing Failed, Please Try After some Time");
                              console.log(er.error);
                            }
                         })
    }else{
      alert("Account Closing will not process")
    }
    

    
   
  }
  

}
