import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseaccountComponent } from './closeaccount.component';

describe('CloseaccountComponent', () => {
  let component: CloseaccountComponent;
  let fixture: ComponentFixture<CloseaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
