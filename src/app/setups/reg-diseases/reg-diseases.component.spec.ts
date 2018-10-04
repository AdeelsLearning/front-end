import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegDiseasesComponent } from './reg-diseases.component';

describe('RegDiseasesComponent', () => {
  let component: RegDiseasesComponent;
  let fixture: ComponentFixture<RegDiseasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegDiseasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
