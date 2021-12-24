import { TestBed } from '@angular/core/testing';

import { RandomimageService } from './randomimage.service';

describe('RandomimageService', () => {
  let service: RandomimageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomimageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
