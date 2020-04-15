import { TestBed } from '@angular/core/testing';

import { ApiTwitterService } from './api-twitter.service';

describe('ApiTwitterService', () => {
  let service: ApiTwitterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiTwitterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
