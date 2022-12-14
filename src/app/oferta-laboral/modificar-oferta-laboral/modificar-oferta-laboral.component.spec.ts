import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarOfertaLaboralComponent } from './modificar-oferta-laboral.component';

describe('ModificarOfertaLaboralComponent', () => {
  let component: ModificarOfertaLaboralComponent;
  let fixture: ComponentFixture<ModificarOfertaLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarOfertaLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModificarOfertaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
