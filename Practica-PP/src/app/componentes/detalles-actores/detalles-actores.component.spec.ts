import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesActoresComponent } from './detalles-actores.component';

describe('DetallesActoresComponent', () => {
  let component: DetallesActoresComponent;
  let fixture: ComponentFixture<DetallesActoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesActoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesActoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
