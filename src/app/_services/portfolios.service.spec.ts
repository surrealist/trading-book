import { TestBed } from '@angular/core/testing';

import { PortfoliosService } from './portfolios.service';

describe('PortfoliosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PortfoliosService = TestBed.get(PortfoliosService);
    expect(service).toBeTruthy();
  });
});
