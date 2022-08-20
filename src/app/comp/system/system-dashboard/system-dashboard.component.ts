import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system-dashboard',
  templateUrl: './system-dashboard.component.html',
  styleUrls: ['./system-dashboard.component.css']
})
export class SystemDashboardComponent implements OnInit {

  dateTime: Date;
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.dateTime = new Date()
  }

  routeNavbar(){
    this.router.navigate(['navbar']);
  }

  routeHome(){
    this.router.navigate(['system/dashboard-sidenav']);
  }

  routeAccount(){
    this.router.navigate(['account']);
  }

  routeValidator(){
    this.router.navigate(['validator']);
  }

  routeSystem(){
    this.router.navigate(['system/dashboard-sidenav']);
  }

  routeLogout(){
    this.router.navigate(['home']);
  }

}
