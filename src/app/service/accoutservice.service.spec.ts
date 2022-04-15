import { TestBed } from '@angular/core/testing';

import { AccoutserviceService } from './accoutservice.service';

describe('AccoutserviceService', () => {
  let service: AccoutserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AccoutserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
