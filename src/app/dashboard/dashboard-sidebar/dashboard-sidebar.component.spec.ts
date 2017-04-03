import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSideBarComponent } from './dashboard-sidebar.component';

describe('DashboardSideBarComponent', () => {
  let component: DashboardSideBarComponent;
  let fixture: ComponentFixture<DashboardSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
