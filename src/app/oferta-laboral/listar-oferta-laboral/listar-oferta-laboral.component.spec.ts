import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOfertaLaboralComponent } from './listar-oferta-laboral.component';

describe('ListarOfertaLaboralComponent', () => {
  let component: ListarOfertaLaboralComponent;
  let fixture: ComponentFixture<ListarOfertaLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarOfertaLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarOfertaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
