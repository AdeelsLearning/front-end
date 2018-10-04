import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsEditComponent } from './months-edit.component';

describe('MonthsEditComponent', () => {
  let component: MonthsEditComponent;
  let fixture: ComponentFixture<MonthsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
