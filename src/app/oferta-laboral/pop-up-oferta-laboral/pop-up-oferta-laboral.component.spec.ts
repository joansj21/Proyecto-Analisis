import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpOfertaLaboralComponent } from './pop-up-oferta-laboral.component';

describe('PopUpOfertaLaboralComponent', () => {
  let component: PopUpOfertaLaboralComponent;
  let fixture: ComponentFixture<PopUpOfertaLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopUpOfertaLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopUpOfertaLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
