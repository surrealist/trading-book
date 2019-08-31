import { TestBed } from '@angular/core/testing';

import { MathUtilService } from './math-util.service';

describe('MathUtilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MathUtilService = TestBed.get(MathUtilService);
    expect(service).toBeTruthy();
  });
});
