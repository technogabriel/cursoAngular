import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuloPruebaServicioComponent } from './modulo-prueba-servicio.component';

describe('ModuloPruebaServicioComponent', () => {
  let component: ModuloPruebaServicioComponent;
  let fixture: ComponentFixture<ModuloPruebaServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuloPruebaServicioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuloPruebaServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
