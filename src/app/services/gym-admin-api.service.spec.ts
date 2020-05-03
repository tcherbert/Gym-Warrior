import { TestBed } from '@angular/core/testing';

import { GymPostCrudService } from './gym-admin-api.service';

describe('PostCrudService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GymPostCrudService = TestBed.get(GymPostCrudService);
    expect(service).toBeTruthy();
  });
});