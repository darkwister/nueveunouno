import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaEventosPage } from './vista-eventos.page';

describe('VistaEventosPage', () => {
  let component: VistaEventosPage;
  let fixture: ComponentFixture<VistaEventosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaEventosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
