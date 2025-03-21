import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { baseballApiGuard } from './baseball-api.guard';

describe('baseballApiGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => baseballApiGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
