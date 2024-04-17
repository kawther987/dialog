import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyApartmentComponent } from './buy-apartment.component';

describe('BuyApartmentComponent', () => {
  let component: BuyApartmentComponent;
  let fixture: ComponentFixture<BuyApartmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BuyApartmentComponent]
    });
    fixture = TestBed.createComponent(BuyApartmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
