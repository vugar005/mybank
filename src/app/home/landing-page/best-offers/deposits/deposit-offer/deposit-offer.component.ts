import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'deposit-offer',
  templateUrl: './deposit-offer.component.html',
  styleUrls: ['./deposit-offer.component.scss']
})
export class DepositOfferComponent implements OnInit {
  @Input() type: string;
  constructor() { }

  ngOnInit() {
  }

}
