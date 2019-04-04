import { Component, OnInit, Input } from '@angular/core';
import { interval } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'exchange-rate',
  templateUrl: './exchange-rate.component.html',
  styleUrls: ['./exchange-rate.component.scss']
})
export class ExchangeRateComponent implements OnInit {
  @Input() exchangeRate;
  currentValue: number;
  previusValue: number;
  constructor() { }

  ngOnInit() {
    this.currentValue = this.exchangeRate.value;
    this.startExchangeStream();
  }
  startExchangeStream() {
    interval(2000)
    .pipe(
      tap((res) => {
        this.previusValue = this.currentValue;
        const random = Math.random() * 10;
        if (random > 5) {
          this.currentValue = this.currentValue + 0.05;
        } else {
          this.currentValue = this.currentValue - 0.05;
        }
      })
    ).subscribe();
  }

}
