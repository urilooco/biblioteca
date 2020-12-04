import { TestBed } from '@angular/core/testing';

import { SlibrosService } from './slibros.service';

describe('SlibrosService', () => {
  let service: SlibrosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlibrosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
