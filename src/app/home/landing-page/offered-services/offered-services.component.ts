import { Component, OnInit } from '@angular/core';
import { MockServices } from './mock-services';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'offered-services',
  templateUrl: './offered-services.component.html',
  styleUrls: ['./offered-services.component.scss']
})
export class OfferedServicesComponent implements OnInit {
  services  = MockServices;
  lang: string;
  constructor(private tranlateService: TranslateService) {
    this.lang = this.tranlateService.getDefaultLang();
  }

  ngOnInit() {
  }
  getLang() {
    return this.tranlateService.getDefaultLang();
  }

}
