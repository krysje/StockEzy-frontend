import { AdminService } from './services/admin.service';
import { RegisterService } from './services/register.service';
import { AuthGuard } from './services/auth.guard';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginService } from './services/login.service';
import { TokenInterceptor } from './services/token.interceptor';
import { RegisterComponent } from './components/register/register.component';
import { CompaniesComponent } from './components/admin/companies/companies.component'
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon'
import { EditCompanyComponent } from './components/admin/edit-company/edit-company.component';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { StockExchangesComponent } from './components/admin/stock-exchanges/stock-exchanges.component';
import { AddStockexchangeComponent } from './components/admin/add-stockexchange/add-stockexchange.component';
import { EditStockexchangeComponent } from './components/admin/edit-stockexchange/edit-stockexchange.component'  
import { MatSidenavModule } from '@angular/material/sidenav'

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    CompaniesComponent,
    EditCompanyComponent,
    AddCompanyComponent,
    StockExchangesComponent,
    AddStockexchangeComponent,
    EditStockexchangeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatSidenavModule
  ],
  providers: [LoginService, AuthGuard, RegisterService, AdminService,
  {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
