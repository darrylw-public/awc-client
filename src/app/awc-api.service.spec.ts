import { TestBed } from '@angular/core/testing';

import { AwcApiService } from './awc-api.service';

describe('AwcApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AwcApiService = TestBed.get(AwcApiService);
    expect(service).toBeTruthy();
  });
});
