import { TestBed } from '@angular/core/testing';

import { ConexionService } from './conexion.service';

describe('ConexiónService', () => {
  let service: ConexionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConexionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
