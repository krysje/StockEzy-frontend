import { Router } from '@angular/router';
import { AdminService } from './../../../services/admin.service';
import { Company } from './../../../models/company.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {
  companies: Company[];
  dataSource;
 
  constructor(private _adminService: AdminService, private _router: Router) { 
    this._adminService.GetCompanies().subscribe(response=>{
      this.companies = response;
      this.dataSource = this.companies;
    })
  }

  displayedColumns: string[] = ['companyCode', 'companyName', 'turnover', 'ceo', 'boardOfDirectors', 'listedinStockExchanges', 'sectorId', 'brief'];
  

  ngOnInit(): void {
  }

  GetItem(code:string)
  {
    localStorage['companyCode']=code;
    console.log(code);
    this._router.navigateByUrl('/edit-company')
  }

}
