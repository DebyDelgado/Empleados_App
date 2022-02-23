import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-caract-empleado',
  templateUrl: './caract-empleado.component.html',
  styleUrls: ['./caract-empleado.component.css']
})
export class CaractEmpleadoComponent implements OnInit {

  @Output() caractEmpleados = new EventEmitter<string>();

  addCaract(value:string){
    this.caractEmpleados.emit(value);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
