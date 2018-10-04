import { TestBed } from '@angular/core/testing';

import { DiseaseDetailsService } from './disease-details.service';

describe('DiseaseDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiseaseDetailsService = TestBed.get(DiseaseDetailsService);
    expect(service).toBeTruthy();
  });
});
