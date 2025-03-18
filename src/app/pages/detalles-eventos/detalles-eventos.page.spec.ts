import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesEventosPage } from './detalles-eventos.page';

describe('DetallesEventosPage', () => {
  let component: DetallesEventosPage;
  let fixture: ComponentFixture<DetallesEventosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
