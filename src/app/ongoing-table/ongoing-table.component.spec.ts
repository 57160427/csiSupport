import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OngoingTableComponent } from './ongoing-table.component';

describe('OngoingTableComponent', () => {
  let component: OngoingTableComponent;
  let fixture: ComponentFixture<OngoingTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OngoingTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OngoingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
