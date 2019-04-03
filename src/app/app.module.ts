import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import {HttpClientModule,  HttpClient} from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {MatFormFieldModule, MatSelectModule, MatMenuModule} from "@angular/material";
import { FooterComponent } from './home/footer/footer.component';
import { FormsModule } from '@angular/forms';
export function HttpLoaderFactory(http: HttpClient) {
  const link = './assets/i18n/';
  return new TranslateHttpLoader(http, link, '.json');
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    FormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
