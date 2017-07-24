import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThisMonthTableComponent } from './this-month-table.component';

describe('ThisMonthTableComponent', () => {
  let component: ThisMonthTableComponent;
  let fixture: ComponentFixture<ThisMonthTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThisMonthTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThisMonthTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
