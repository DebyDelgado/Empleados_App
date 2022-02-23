import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaractEmpleadoComponent } from './caract-empleado.component';

describe('CaractEmpleadoComponent', () => {
  let component: CaractEmpleadoComponent;
  let fixture: ComponentFixture<CaractEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaractEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaractEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
