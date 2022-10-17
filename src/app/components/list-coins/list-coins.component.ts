import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

export interface CoinData {
  id: string;
  symbol: string;
  name: string;
  image: string;
  rank: number;
  price: number;
  p_1h: number;
  p_24h: number;
  p_7d: number;
  sparkline: {
    price: Array<number>;
  }
}

function convertData(data:any): CoinData[] {
  let resultArray:any = [];
  let convertedArray: CoinData[] = [];
  resultArray = data;

  for (let index = 0; index < resultArray.length; index++) {
    const convertedData = {
      id: resultArray[index].id,
      symbol: resultArray[index].symbol,
      name: resultArray[index].name,
      image: resultArray[index].image,
      rank: resultArray[index].market_cap_rank,
      price: resultArray[index].current_price,
      p_1h: resultArray[index].price_change_percentage_1h,
      p_24h: resultArray[index].price_change_percentage_24h,
      p_7d: resultArray[index].price_change_percentage_7d,
      sparkline: resultArray[index].sparkline
    };
    convertedArray.push(convertedData);
  }
  return convertedArray;
}

@Component({
  selector: 'app-list-coins',
  templateUrl: './list-coins.component.html',
  styleUrls: ['./list-coins.component.scss']
})
export class ListCoinsComponent implements OnInit {
  loading: boolean = true;
  dataSource: MatTableDataSource<CoinData>;
  displayData = ['rank', 'name', 'price', 'p_1h', 'p_24h', 'p_7d'];
  currentPage: number = 1;
  perPage: number = 100;

  constructor(private http:HttpClient, private ElByClassName: ElementRef) {
    const coinDataJSON: CoinData[] = [];
  }

  @ViewChild(MatSort) sort: MatSort;

  test(count:any) {
    this.perPage = count;
    this.ngAfterViewInit();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.getNewData()
  }

  previous() {
    if(this.currentPage > 1){
      this.currentPage --;
      this.ngAfterViewInit();
    }
  }

  next () {
    this.currentPage++;
    this.ngAfterViewInit();
  }

  getNewData() {
    this.loading = true;
    this.http.get(`https://crypto-backend-nodejs.herokuapp.com/list?page=${this.currentPage}&per_page=${this.perPage}`)
    .subscribe(result => {
      const convertedData = convertData(result);
      this.dataSource = new MatTableDataSource(convertedData);
      this.dataSource.sort = this.sort;
      this.loading = false;
    })
  }

  roundUpNumberPercent(data:number): string {
    if(data){
      return `${data.toFixed(2)} %`;
    }
    else{
      return 'n/a';
    }
  }

  roundUpNumberDollar(data:number): string {
    if(data){
      return `${data.toFixed(2)} $`;
    }
    else{
      return 'n/a';
    }
  }

  toUppercase(data:string): string {
    return data.toUpperCase();
  }

  isNegative(data:number): boolean {
    if(data < 0){
      return true;
    }else {
      return false;
    }
  }
}
