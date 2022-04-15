import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AccountComponent } from './comp/account/account.component';
import { NavbarComponent } from './comp/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './comp/footer/footer.component';
import { UserloginComponent } from './comp/userlogin/userlogin.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSliderModule} from '@angular/material/slider';
import { ValidatorComponent } from './comp/validator/validator.component';
import { SystemComponent } from './comp/system/system.component';
import { OpenaccountComponent } from './comp/account/openaccount/openaccount.component';
import { CloseaccountComponent } from './comp/account/closeaccount/closeaccount.component';
import { MatTableModule } from '@angular/material/table';
import { ViewaccountComponent } from './comp/account/viewaccount/viewaccount.component';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatFormFieldModule } from '@angular/material/form-field';
import { OpenactdialogComponent } from './dialog/openactdialog/openactdialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
   declarations: [
      AppComponent,
      AccountComponent,
      NavbarComponent,
      HomeComponent,
      FooterComponent,
      UserloginComponent,
      MainpageComponent,
      ValidatorComponent,
      SystemComponent,
      OpenaccountComponent,
      CloseaccountComponent,
      ViewaccountComponent,
      OpenactdialogComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatToolbarModule,
      FormsModule,
      ReactiveFormsModule,
      AppRoutingModule,
      MatSidenavModule,
      MatMenuModule,
      MatListModule,
      MatIconModule,
      MatButtonModule,
      MatTableModule,
      HttpClientModule,
      MatSliderModule,
      NgxPaginationModule,
      MatFormFieldModule,
      MatPaginatorModule,
      MatDialogModule,
      MatSelectModule,
      MatOptionModule,
      MatInputModule,
      MatRadioModule,
      MatNativeDateModule,
      MatDatepickerModule,
      MatSortModule,
      RouterModule.forRoot([
        { path: '', pathMatch: 'full', redirectTo: 'navbar'},
        { path: 'home', component: HomeComponent },
        { path: 'login', component: UserloginComponent},
        { path: 'app-mainpage', component: MainpageComponent},
        { path: 'navbar', component: NavbarComponent},
        { path: 'act', component: AccountComponent},
        { path: "openAct", component: OpenaccountComponent},
        { path: "footer", component: FooterComponent}
      ])
   ],
   providers: [],
   bootstrap: [AppComponent]
})
export class AppModule { }