import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { SystemSideNavWrapperComponent } from './system-side-nav-wrapper/system-side-nav-wrapper.component';
import { SystemDashboardComponent } from './system-dashboard/system-dashboard.component';
import { SystemEnquiryComponent } from './system-enquiry/system-enquiry.component';
import { SystemInfoComponent } from './system-info/system-info.component';
import { SystemSideNavRoutingModule } from './system-sidenav-routing.module';
import { FooterComponent } from '../footer/footer.component';

@NgModule({
  declarations: [SystemSideNavWrapperComponent],
  imports: [
    CommonModule,
    SystemSideNavRoutingModule,

    // NG Material Modules
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class SystemSideNavModule { }
