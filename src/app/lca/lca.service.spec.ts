import { TestBed, inject } from '@angular/core/testing';

import { LcaService } from './lca.service';

describe('LcaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LcaService]
    });
  });

  it('should ...', inject([LcaService], (service: LcaService) => {
    expect(service).toBeTruthy();
  }));
});
