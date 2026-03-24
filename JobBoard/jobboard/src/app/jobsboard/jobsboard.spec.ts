import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Jobsboard } from './jobsboard';

describe('Jobsboard', () => {
  let component: Jobsboard;
  let fixture: ComponentFixture<Jobsboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Jobsboard],
    }).compileComponents();

    fixture = TestBed.createComponent(Jobsboard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
