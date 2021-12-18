import { Time } from "@angular/common";

export class StockPrice {
    stockCode: number;
    companyCode: number;
    stockExchange: string;
    currentPrice: number;
    date: Date;
    time: Time;
}
