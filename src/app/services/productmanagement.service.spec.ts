import { TestBed } from '@angular/core/testing';

import { ProductmanagementService } from './productmanagement.service';

describe('ProductmanagementService', () => {
  let service: ProductmanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductmanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
