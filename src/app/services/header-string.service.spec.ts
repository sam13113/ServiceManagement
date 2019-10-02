import { TestBed } from '@angular/core/testing';

import { HeaderStringService } from './header-string.service';

describe('HeaderStringService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HeaderStringService = TestBed.get(HeaderStringService);
    expect(service).toBeTruthy();
  });
});
