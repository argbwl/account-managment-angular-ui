import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemSideNavWrapperComponent } from './system-side-nav-wrapper.component';

describe('SystemSideNavWrapperComponent', () => {
  let component: SystemSideNavWrapperComponent;
  let fixture: ComponentFixture<SystemSideNavWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemSideNavWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemSideNavWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
