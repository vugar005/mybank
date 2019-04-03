import { Component, OnInit } from '@angular/core';
import { MockCurrencies } from './mock-currencties';

@Component({
  selector: 'live-currency-view',
  templateUrl: './live-currency-view.component.html',
  styleUrls: ['./live-currency-view.component.scss']
})
export class LiveCurrencyViewComponent implements OnInit {
   currencies = MockCurrencies;
  constructor() { }

  ngOnInit() {
  }

}
