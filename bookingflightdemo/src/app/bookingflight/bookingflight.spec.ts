import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bookingflight } from './bookingflight';

describe('Bookingflight', () => {
  let component: Bookingflight;
  let fixture: ComponentFixture<Bookingflight>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bookingflight],
    }).compileComponents();

    fixture = TestBed.createComponent(Bookingflight);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
