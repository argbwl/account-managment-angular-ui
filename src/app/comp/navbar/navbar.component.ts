import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private routerC : Router) { }

  ngOnInit(): void {
  }

  routingHome(){
    this.routerC.navigate(['system/dashboard-sidenav']);
  }

  routeAccount(){
    this.routerC.navigate(['account']);
  }

  routeValidator(){
    this.routerC.navigate(['validator']);
  }

  routeSystem(){
    this.routerC.navigate(['system']);
  }

  routeLogout(){
    this.routerC.navigate(['home']);
  }
  

}
