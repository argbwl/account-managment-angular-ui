import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-enquiry',
  templateUrl: './system-enquiry.component.html',
  styleUrls: ['./system-enquiry.component.css']
})
export class SystemEnquiryComponent implements OnInit {

  dateTime: Date;
  constructor() { }

  ngOnInit(): void {
    this.dateTime = new Date()
  }

}
