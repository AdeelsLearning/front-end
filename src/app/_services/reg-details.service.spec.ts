import { TestBed } from '@angular/core/testing';

import { RegDetailsService } from './reg-details.service';

describe('RegDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegDetailsService = TestBed.get(RegDetailsService);
    expect(service).toBeTruthy();
  });
});
