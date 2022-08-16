import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system-enquiry',
  templateUrl: './system-enquiry.component.html',
  styleUrls: ['./system-enquiry.component.css']
})
export class SystemEnquiryComponent implements OnInit {

  dateTime: Date;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.dateTime = new Date()
  }

  routeNavbar(){
    this.router.navigate(['navbar']);
  }

}
