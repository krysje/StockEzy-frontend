import { EditStockexchangeComponent } from './components/admin/edit-stockexchange/edit-stockexchange.component';
import { StockExchangesComponent } from './components/admin/stock-exchanges/stock-exchanges.component';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { EditCompanyComponent } from './components/admin/edit-company/edit-company.component';
import { CompaniesComponent } from './components/admin/companies/companies.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full'
  },
  {
    path:'register',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path: 'dashboard',
    component:DashboardComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path: 'view-all-companies',
    component:CompaniesComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'edit-company',
    component:EditCompanyComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'add-company',
    component:AddCompanyComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'view-all-stockexchanges',
    component:StockExchangesComponent,
    canActivate:[AuthGuard]
  },
  {
    path: 'edit-stockexchange',
    component: EditStockexchangeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
