import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardButtongrpComponent } from './dashboard-buttongrp.component';

describe('DashboardButtongrpComponent', () => {
  let component: DashboardButtongrpComponent;
  let fixture: ComponentFixture<DashboardButtongrpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardButtongrpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardButtongrpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
