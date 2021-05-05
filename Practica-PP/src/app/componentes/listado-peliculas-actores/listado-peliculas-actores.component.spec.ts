import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPeliculasActoresComponent } from './listado-peliculas-actores.component';

describe('ListadoPeliculasActoresComponent', () => {
  let component: ListadoPeliculasActoresComponent;
  let fixture: ComponentFixture<ListadoPeliculasActoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPeliculasActoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPeliculasActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
