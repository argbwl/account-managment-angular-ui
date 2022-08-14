import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-system-side-nav-wrapper',
  templateUrl: './system-side-nav-wrapper.component.html',
  styleUrls: ['./system-side-nav-wrapper.component.css']
})
export class SystemSideNavWrapperComponent implements OnInit {

  isExpanded: boolean = false;
  dateTime: Date;
  constructor() { }

  ngOnInit(): void {
    this.dateTime = new Date()
  }

}
