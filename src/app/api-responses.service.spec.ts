import { TestBed } from '@angular/core/testing';

import { ApiResponsesService } from './shared/service/api-responses.service';

describe('ApiResponsesService', () => {
  let service: ApiResponsesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiResponsesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
