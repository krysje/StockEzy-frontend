import { Router } from '@angular/router';
import { AdminService } from './../../../services/admin.service';
import { StockExchange } from './../../../models/stock-exchange.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stock-exchanges',
  templateUrl: './stock-exchanges.component.html',
  styleUrls: ['./stock-exchanges.component.css']
})
export class StockExchangesComponent implements OnInit {
  stockexs: StockExchange[];
  dataSource;

  constructor(private _adminService: AdminService, private _router: Router) {
    this._adminService.GetStockExchanges().subscribe(response=>{
      this.stockexs = response;
      this.dataSource = this.stockexs;
    })
  }

  displayedColumns: string[] = ['stockExchange', 'brief', 'contactAddress', 'remarks'];

  ngOnInit(): void {
  }

  GetItem(code:string)
  {
    localStorage['stockExchange']=code;
    console.log(code);
    this._router.navigateByUrl('/edit-stockexchange')
  }

}
