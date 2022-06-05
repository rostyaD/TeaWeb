import { TestBed } from '@angular/core/testing';

import { TeaTypesService } from './tea-types.service';

describe('TeaTypesService', () => {
  let service: TeaTypesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TeaTypesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
