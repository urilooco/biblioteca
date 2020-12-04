import { TestBed } from '@angular/core/testing';

import { SmlibrosService } from './smlibros.service';

describe('SmlibrosService', () => {
  let service: SmlibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmlibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
