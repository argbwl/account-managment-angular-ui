import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account-side-nav-wrapper',
  templateUrl: './account-side-nav-wrapper.component.html',
  styleUrls: ['./account-side-nav-wrapper.component.css']
})
export class AccountSideNavWrapperComponent implements OnInit {

  isExpanded: boolean = false;
  dateTime: Date;

  constructor(private router : Router) { }

  ngOnInit(): void {
    this.router.navigate(['account/open-act-sidenav']);
  }



}
