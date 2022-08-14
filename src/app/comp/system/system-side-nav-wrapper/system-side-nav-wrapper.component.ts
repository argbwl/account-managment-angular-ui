import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-system-side-nav-wrapper',
  templateUrl: './system-side-nav-wrapper.component.html',
  styleUrls: ['./system-side-nav-wrapper.component.css']
})
export class SystemSideNavWrapperComponent implements OnInit {

  isExpanded: boolean = false;
  dateTime: Date;



  constructor(private routeA : ActivatedRoute, 
              private routerC : Router) {

  }

  ngOnInit(): void {
    this.dateTime = new Date();
    this.routerC.navigate(['system/dashboard-sidenav'])
  }

}
