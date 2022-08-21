import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { AccoutserviceService } from 'src/app/service/accoutservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import {ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-closeaccount',
  templateUrl: './closeaccount.component.html',
  styleUrls: ['./closeaccount.component.css']
})

export class CloseaccountComponent implements OnInit {

  dataSource: MatTableDataSource<any>;
  // accountList : any;
  displayedColumns: string[] = ['id', 'accName', 'accNum', 'accStatus','closingSts'];

  dateTime: Date;

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
    this.dateTime = new Date();
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
                           //alert("error fetching data");
                           Swal.fire('Server Down!', 'Error Fetching Data!', 'error');
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

  // closeAccount1(data:string){
  //   //alert(data);
  //   console.log(data);
  //   if(confirm("Closing Account will take 7 Days to process,\nPlease confirm if need to close account for below account\nAccount Number ["+data+"]")) {
  //     this.accountService.closeAccount(data)
  //                        .subscribe({
  //                           next:(res)=>{
  //                             alert("Account Closing Submitted for account number :: "+data);
  //                             this.getAllAccountListForClose();
  //                           },
  //                           error:(er)=>{
  //                             alert("Account Closing Failed, Please Try After some Time");
  //                             console.log(er.error);
  //                           }
  //                        })
  //   }else{
  //     alert("Account Closing will not process")
  //   }
  // }

  closeAccount(data:string){
    //alert(data);
    console.log(data);

    Swal.fire({
      title: 'Are you sure?',
      text: "Confirm if need to close account Account Number ["+data+"]",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Close this Account'
    }).then((result) => {
      if (result.isConfirmed) {
        this.accountService.closeAccount(data)
                         .subscribe({
                            next:(res)=>{
                              Swal.fire({
                                title:'Closed!',
                                text:'Account Closing Submitted for account number :: '+data,
                                icon:'warning',
                                footer: 'Closing of Account will take 7 Days to process completely'
                              })
                              this.getAllAccountListForClose();
                            },
                            error:(er)=>{
                              Swal.fire('FAILED','Account Closing Failed, Please Try After some Time','error');
                              console.log(er.error);
                            }
                         })
      }
    })
  }
  

}
