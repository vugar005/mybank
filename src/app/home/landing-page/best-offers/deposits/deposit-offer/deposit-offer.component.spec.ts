import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepositOfferComponent } from './deposit-offer.component';

describe('DepositOfferComponent', () => {
  let component: DepositOfferComponent;
  let fixture: ComponentFixture<DepositOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepositOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepositOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
