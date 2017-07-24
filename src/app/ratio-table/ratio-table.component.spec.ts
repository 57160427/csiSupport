import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatioTableComponent } from './ratio-table.component';

describe('RatioTableComponent', () => {
  let component: RatioTableComponent;
  let fixture: ComponentFixture<RatioTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatioTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatioTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
