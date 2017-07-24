import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalDataTableComponent } from './total-data-table.component';

describe('TotalDataTableComponent', () => {
  let component: TotalDataTableComponent;
  let fixture: ComponentFixture<TotalDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
