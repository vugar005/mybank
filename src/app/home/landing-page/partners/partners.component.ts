import { Component, OnInit } from '@angular/core';
import { MockPartners } from './mock-partners';

@Component({
  selector: 'partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {
  partners = MockPartners;
  constructor() { }

  ngOnInit() {
  }

}
