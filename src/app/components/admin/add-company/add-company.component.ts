import { Router } from '@angular/router';
import { AdminService } from './../../../services/admin.service';
import { Form, FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Company } from './../../../models/company.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  company: Company
  _formGroup: FormGroup

  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');


  constructor(private _formbuilder: FormBuilder, private _adminService: AdminService, private _router: Router) { 
    this.company = new Company();
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(){
    this._formGroup = new FormGroup({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
      companyCode: new FormControl('', [Validators.required]),
      companyName: new FormControl('', [Validators.required]),
      turnover: new FormControl('', [Validators.required]),
      ceo: new FormControl('', [Validators.required]),
      boardOfDirectors: new FormControl('', [Validators.required]),
      listedinStockExchanges: new FormControl('', [Validators.required]),
      sectorId: new FormControl('', [Validators.required]),
      brief: new FormControl('', [Validators.required])
    })
  }

  onAdd(){
    if(this._formGroup.valid){
      this.company.companyCode = this._formGroup.value["companyCode"];
      this.company.companyName = this._formGroup.value["companyName"];
      this.company.turnover = this._formGroup.value["turnover"];
      this.company.ceo = this._formGroup.value["ceo"];
      this.company.boardOfDirectors = this._formGroup.value["boardOfDirectors"];
      this.company.listedinStockExchanges = this._formGroup.value["listedinStockExchanges"];
      this.company.sectorId = this._formGroup.value["sectorId"];
      this.company.brief = this._formGroup.value["brief"];


      this._adminService.AddCompany(this.company).subscribe(
        response => {
          console.log(response);
          alert("success");
          this._router.navigateByUrl('/view-all-companies');
        },
        error=>{
          console.log("error");
          alert("Something's wrong!");
        })}
    else{
      console.log("Not Valid");
    }
  }

}
