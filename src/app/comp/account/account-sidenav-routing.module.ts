import { NgModule } from '@angular/core';
 import { RouterModule, Routes } from '@angular/router';
import { OpenaccountComponent } from './openaccount/openaccount.component';
import { CloseaccountComponent } from './closeaccount/closeaccount.component';
import { ViewaccountComponent } from './viewaccount/viewaccount.component';
import { AccountSideNavWrapperComponent } from './account-side-nav-wrapper/account-side-nav-wrapper.component';


 const routes: Routes = [
   // Sidenavwrapper Component acts like a shell & the active child Component gets rendered into the <router-outlet>
   {
     path: '',
     component: AccountSideNavWrapperComponent,
     children: [
       {
         path: 'open-act-sidenav',
         component: OpenaccountComponent
       },
       {
         path: 'close-act-sidenav',
         component: CloseaccountComponent
       },
       {
         path: 'view-act-sidenav',
         component: ViewaccountComponent
       }
     ]
   }
 ];

 @NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule]
 })

 export class AccountSideNavRoutingModule{}