import { TestBed } from '@angular/core/testing';

import { ResponseService } from './response-service.service';

describe('ResponseServiceService', () => {
  let service: ResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
