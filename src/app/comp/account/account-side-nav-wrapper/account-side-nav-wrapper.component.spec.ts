import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountSideNavWrapperComponent } from './account-side-nav-wrapper.component';

describe('AccountSideNavWrapperComponent', () => {
  let component: AccountSideNavWrapperComponent;
  let fixture: ComponentFixture<AccountSideNavWrapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountSideNavWrapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountSideNavWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
