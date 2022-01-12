import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioPacientesComponent } from './exercicio-pacientes.component';

describe('ExercicioPacientesComponent', () => {
  let component: ExercicioPacientesComponent;
  let fixture: ComponentFixture<ExercicioPacientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioPacientesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExercicioPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
