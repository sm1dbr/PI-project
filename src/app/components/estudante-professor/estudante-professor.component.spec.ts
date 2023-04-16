import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudanteProfessorComponent } from './estudante-professor.component';

describe('EstudanteProfessorComponent', () => {
  let component: EstudanteProfessorComponent;
  let fixture: ComponentFixture<EstudanteProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudanteProfessorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstudanteProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
