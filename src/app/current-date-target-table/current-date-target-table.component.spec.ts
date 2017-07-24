import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentDateTargetTableComponent } from './current-date-target-table.component';

describe('CurrentDateTargetTableComponent', () => {
  let component: CurrentDateTargetTableComponent;
  let fixture: ComponentFixture<CurrentDateTargetTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentDateTargetTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentDateTargetTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
