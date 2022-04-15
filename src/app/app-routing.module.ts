import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './comp/account/account.component';
import { CloseaccountComponent } from './comp/account/closeaccount/closeaccount.component';
import { OpenaccountComponent } from './comp/account/openaccount/openaccount.component';
import { ViewaccountComponent } from './comp/account/viewaccount/viewaccount.component';
import { SystemComponent } from './comp/system/system.component';
import { ValidatorComponent } from './comp/validator/validator.component';


const routes: Routes = [
  { path: 'account', component: AccountComponent},
  { path: 'validator', component: ValidatorComponent },
  { path: 'system', component: SystemComponent},
  { path: 'openact', component: OpenaccountComponent},
  { path: 'closeact', component: CloseaccountComponent},
  { path: 'viewact', component: ViewaccountComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
