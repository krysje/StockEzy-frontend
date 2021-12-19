import { StockExchange } from './../models/stock-exchange.model';
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

    public AddCompany(company:Company):Observable<any>
    {
      console.log(company)
      return this.service.post(this.url+'/AddCompany',company);
    }

    public UpdateCompany(company:Company):Observable<any> //Update Item
    {
      return this.service.put(this.url+'/UpdateCompany',company);
    }

    public DeleteCompany(code: string):Observable<any>
    {
     return this.service.delete(this.url+'/DeleteCompany/'+code);
    }

    public GetStockExchanges():Observable<StockExchange[]>
    {
      return this.service.get<StockExchange[]>(this.url+'/GetAllStockExchanges');
    }

    public GetStockExchangeByName(name:string):Observable<StockExchange>
    {
      return this.service.get<StockExchange>(this.url+'/GetStockExchange/'+name);
    }

    public UpdateStockExchange(stockex:StockExchange):Observable<any> //Update Item
    {
      return this.service.put(this.url+'/UpdateStockExchange',stockex);
    }

    
    public AddStockExchange(stockex:StockExchange):Observable<any>
    {
      console.log(stockex)
      return this.service.post(this.url+'/AddStockExchange',stockex);
    }


}
