import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NameDateComponent } from './name-date.component';

describe('NameDateComponent', () => {
  let component: NameDateComponent;
  let fixture: ComponentFixture<NameDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NameDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NameDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
