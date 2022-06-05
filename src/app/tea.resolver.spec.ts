import { TestBed } from '@angular/core/testing';

import { TeaResolver } from './tea.resolver';

describe('TeaResolver', () => {
  let resolver: TeaResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TeaResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
