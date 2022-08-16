import { NgModule } from '@angular/core';
 import { CommonModule } from '@angular/common';
 import { MatSidenavModule } from '@angular/material/sidenav';
 import { MatIconModule } from '@angular/material/icon';
 import { MatListModule } from '@angular/material/list';
 import { MatToolbarModule } from '@angular/material/toolbar';
 import { AccountSideNavRoutingModule } from './account-sidenav-routing.module';
import { AccountSideNavWrapperComponent } from './account-side-nav-wrapper/account-side-nav-wrapper.component';

 @NgModule({
   declarations: [AccountSideNavWrapperComponent],
   imports: [
     CommonModule,
     AccountSideNavRoutingModule,

     // NG Material Modules
     MatSidenavModule,
     MatIconModule,
     MatListModule,
     MatToolbarModule
   ]
 })
 export class AccountSideNavModule { }