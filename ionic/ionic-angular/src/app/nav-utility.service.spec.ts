import { TestBed } from '@angular/core/testing';

import { NavUtilityService } from './nav-utility.service';

describe('NavUtilityService', () => {
  let service: NavUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
