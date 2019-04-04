import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { LangingPageRoutingModule } from './landing-page.routing';
import { SharedModule } from '../shared/shared.module';
import { OfferedServicesComponent } from './offered-services/offered-services.component';
import { BestOffersComponent } from './best-offers/best-offers.component';
import { HoldingsComponent } from './best-offers/holdings/holdings.component';
import {MatTabsModule} from '@angular/material/tabs';
import { PartnersComponent } from './partners/partners.component';
import { DepositsComponent } from './best-offers/deposits/deposits.component';
import { DepositOfferComponent } from './best-offers/deposits/deposit-offer/deposit-offer.component';
import { ExchangeRatesComponent } from './exchange-rates/exchange-rates.component';
import { ExchangeRateComponent } from './exchange-rates/exchange-rate/exchange-rate.component';

@NgModule({
  imports: [
    CommonModule,
    LangingPageRoutingModule,
    SharedModule,
    MatTabsModule
  ],
  declarations: [
    LandingPageComponent,
    OfferedServicesComponent,
    BestOffersComponent, HoldingsComponent,
    PartnersComponent,
    DepositsComponent,
    DepositOfferComponent,
    ExchangeRatesComponent,
    ExchangeRateComponent
  ]
})
export class LandingPageModule { }
