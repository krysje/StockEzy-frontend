import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { AdminService } from './../../../services/admin.service';
import { Company } from './../../../models/company.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {

  company: Company;
  formGroup: FormGroup;
  //newCompanydetails: Company;

  constructor(private _adminService: AdminService, private _router:Router) {
    this.company = new Company();
    let companyCode = localStorage.getItem('companyCode');
    console.log(companyCode);

    this._adminService.GetCompanyByCode(companyCode).subscribe(response => {
      this.company = response;
      console.log(this.company);
    })
  }

  ngOnInit(): void {
  }


  onUpdate(){
    console.log(this.company);
    this._adminService.UpdateCompany(this.company).subscribe(response=>{
        this._router.navigateByUrl('/view-all-companies');
    });
  }

  onDelete(){
    this._adminService.DeleteCompany(this.company.companyCode).subscribe(response=>{
      console.log(response);
      this._router.navigateByUrl('/view-all-companies');
    })
  }

}
