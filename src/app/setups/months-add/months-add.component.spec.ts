import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthsAddComponent } from './months-add.component';

describe('MonthsAddComponent', () => {
  let component: MonthsAddComponent;
  let fixture: ComponentFixture<MonthsAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthsAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthsAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
