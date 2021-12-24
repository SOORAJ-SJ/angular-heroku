import { TestBed } from '@angular/core/testing';

import { PrecacheService } from './precache.service';

describe('PrecacheService', () => {
  let service: PrecacheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrecacheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
