import { TestBed } from '@angular/core/testing';

import { ConexiónService } from './conexión.service';

describe('ConexiónService', () => {
  let service: ConexiónService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexiónService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
