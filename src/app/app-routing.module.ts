import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountSideNavWrapperComponent } from './comp/account/account-side-nav-wrapper/account-side-nav-wrapper.component';
import { AccountComponent } from './comp/account/account.component';
import { CloseaccountComponent } from './comp/account/closeaccount/closeaccount.component';
import { OpenaccountComponent } from './comp/account/openaccount/openaccount.component';
import { ViewaccountComponent } from './comp/account/viewaccount/viewaccount.component';
import { FooterComponent } from './comp/footer/footer.component';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { SystemInfoComponent } from './comp/system/system-info/system-info.component';
//import { SystemComponent } from './comp/system/system.component';
import { UserloginComponent } from './comp/userlogin/userlogin.component';
import { ValidatorComponent } from './comp/validator/validator.component';
import { HomeComponent } from './home/home.component';
import { MainpageComponent } from './mainpage/mainpage.component';


const routes: Routes = [
  {
    path: 'system',
    loadChildren: () => import('./comp/system/system-sidenav.module').then(m => m.SystemSideNavModule)
  },
  { path: 'account',
    loadChildren: () => import('./comp/account/account-sidenav.module').then(m => m.AccountSideNavModule)
  },
  // { path: 'actSideNav', component: AccountSideNavWrapperComponent},
  { path: 'validator', component: ValidatorComponent },
  // { path: 'system', component: SystemComponent},
  { path: 'openact', component: OpenaccountComponent},
  { path: 'closeact', component: CloseaccountComponent},
  { path: 'viewact', component: ViewaccountComponent},
  { path: '', pathMatch: 'full', redirectTo: 'home'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: UserloginComponent},
  { path: 'app-mainpage', component: MainpageComponent},
  { path: 'navbar', component: NavbarComponent},
  //{ path: 'act', component: AccountComponent},
  { path: "openAct", component: OpenaccountComponent},
  { path: "footer", component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
