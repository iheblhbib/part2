import { TestBed } from '@angular/core/testing';

import { EgyptService } from './egypt.service';

describe('EgyptService', () => {
  let service: EgyptService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EgyptService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
