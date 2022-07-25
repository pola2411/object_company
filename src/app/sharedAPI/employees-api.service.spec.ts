import { TestBed } from '@angular/core/testing';

import { EmployeesAPIService } from './employees-api.service';

describe('EmployeesAPIService', () => {
  let service: EmployeesAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeesAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
