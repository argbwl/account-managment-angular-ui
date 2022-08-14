import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemEnquiryComponent } from './system-enquiry.component';

describe('SystemEnquiryComponent', () => {
  let component: SystemEnquiryComponent;
  let fixture: ComponentFixture<SystemEnquiryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SystemEnquiryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SystemEnquiryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
