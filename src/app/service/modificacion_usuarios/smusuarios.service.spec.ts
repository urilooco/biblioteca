import { TestBed } from '@angular/core/testing';

import { SmusuariosService } from './smusuarios.service';

describe('SmusuariosService', () => {
  let service: SmusuariosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SmusuariosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
