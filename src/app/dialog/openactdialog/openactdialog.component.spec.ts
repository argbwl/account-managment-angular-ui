import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenactdialogComponent } from './openactdialog.component';

describe('OpenactdialogComponent', () => {
  let component: OpenactdialogComponent;
  let fixture: ComponentFixture<OpenactdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpenactdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenactdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
