import { TestBed } from '@angular/core/testing';

import { ServicioMovieService } from './servicio-movie.service';

describe('ServicioMovieService', () => {
  let service: ServicioMovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioMovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
