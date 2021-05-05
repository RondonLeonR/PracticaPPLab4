import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoPaisesActoresComponent } from './listado-paises-actores.component';

describe('ListadoPaisesActoresComponent', () => {
  let component: ListadoPaisesActoresComponent;
  let fixture: ComponentFixture<ListadoPaisesActoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadoPaisesActoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoPaisesActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
