import { Component, OnInit } from '@angular/core';
import { MockServices } from './mock-services';

@Component({
  selector: 'offered-services',
  templateUrl: './offered-services.component.html',
  styleUrls: ['./offered-services.component.scss']
})
export class OfferedServicesComponent implements OnInit {
  services  = MockServices;
  constructor() { }

  ngOnInit() {
  }

}
