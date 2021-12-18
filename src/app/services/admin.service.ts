import { Company } from './../models/company.model';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url = environment.stock_url;
  
    constructor(private service:HttpClient) { }
 
    public GetCompanies():Observable<Company[]>
    {
      return this.service.get<Company[]>(this.url+'/GetCompanies');
    }
    
    public GetCompanyByCode(code:string):Observable<Company>
    {
      return this.service.get<Company>(this.url+'/GetCompany/'+code);
    }

    // public AddItem(item:Item):Observable<any>//Add Item
    // {
    //   console.log(item)
    //   return this.service.post(this.url+'AddItem',item);
    // }
    public UpdateCompany(company:Company):Observable<any> //Update Item
    {
      return this.service.put(this.url+'/UpdateCompany',company);
    }
}
