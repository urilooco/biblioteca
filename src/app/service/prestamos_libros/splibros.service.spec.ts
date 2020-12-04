import { TestBed } from '@angular/core/testing';

import { SplibrosService } from './splibros.service';

describe('SplibrosService', () => {
  let service: SplibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
