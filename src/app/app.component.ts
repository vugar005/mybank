import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'birbank';
  constructor(private translateService: TranslateService) {}
  ngOnInit() {
    this.translateService.setDefaultLang('ru');
  }
}
