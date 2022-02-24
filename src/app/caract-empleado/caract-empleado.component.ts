import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-caract-empleado',
  templateUrl: './caract-empleado.component.html',
  styleUrls: ['./caract-empleado.component.css']
})
export class CaractEmpleadoComponent implements OnInit {

  @Output() caractEmpleados = new EventEmitter<string>();

  //constructor(private miServicio:ServicioEmpleadosService) { }

  ngOnInit(): void {
  }

  addCaract(value:string){
   //this.miServicio.showMensaje(value);
   this.caractEmpleados.emit(value);

  }

  

 

}
