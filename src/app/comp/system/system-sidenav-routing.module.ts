import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SystemDashboardComponent } from './system-dashboard/system-dashboard.component';
import { SystemEnquiryComponent } from './system-enquiry/system-enquiry.component';
import { SystemInfoComponent } from './system-info/system-info.component';
import { SystemSideNavWrapperComponent } from './system-side-nav-wrapper/system-side-nav-wrapper.component';


const routes: Routes = [
  // Sidenavwrapper Component acts like a shell & the active child Component gets rendered into the <router-outlet>
  {
    path: '',
    component: SystemSideNavWrapperComponent,
    children: [
      {
        path: 'dashboard-sidenav',
        component: SystemDashboardComponent
      },
      {
        path: 'info-sidenav',
        component: SystemInfoComponent
      },
      {
        path: 'enquiry-sidenav',
        component: SystemEnquiryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SystemSideNavRoutingModule { }
