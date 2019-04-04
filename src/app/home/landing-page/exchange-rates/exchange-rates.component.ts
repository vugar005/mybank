import { Component, OnInit } from '@angular/core';
import { MockExchangeRates } from './exchange-rate/mock-exchange-rates';

@Component({
  selector: 'exchange-rates',
  templateUrl: './exchange-rates.component.html',
  styleUrls: ['./exchange-rates.component.scss']
})
export class ExchangeRatesComponent implements OnInit {
  exchangeRates = MockExchangeRates;
  constructor() { }

  ngOnInit() {
  }

}
