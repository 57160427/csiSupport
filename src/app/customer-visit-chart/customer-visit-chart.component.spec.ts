import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerVisitChartComponent } from './customer-visit-chart.component';

describe('CustomerVisitChartComponent', () => {
  let component: CustomerVisitChartComponent;
  let fixture: ComponentFixture<CustomerVisitChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerVisitChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerVisitChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
