import { Router } from '@angular/router';
import { AdminService } from './../../../services/admin.service';
import { StockExchange } from './../../../models/stock-exchange.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-stockexchange',
  templateUrl: './edit-stockexchange.component.html',
  styleUrls: ['./edit-stockexchange.component.css']
})
export class EditStockexchangeComponent implements OnInit {

  stockex: StockExchange;
  formGroup: FormGroup;

  constructor(private _adminService: AdminService, private _router: Router) {
    this.stockex = new StockExchange();
    let stockexchange = localStorage.getItem('stockExchange');
    console.log(stockexchange);

    this._adminService.GetStockExchangeByName(stockexchange).subscribe(response => {
      this.stockex = response;
      console.log(this.stockex);
    })
   }

  ngOnInit(): void {
  }

  
  onUpdate(){
    console.log(this.stockex);
    this._adminService.UpdateStockExchange(this.stockex).subscribe(response=>{
        this._router.navigateByUrl('/view-all-stockexchanges');
    });
  }

}
