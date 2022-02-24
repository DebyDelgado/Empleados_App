import { Component, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  title = 'Listado de Empleados';
  constructor(private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { 

    //this.empleados=this.empleadosService.empleados;

  }

  empleados:Empleado[]=[];
  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }
 

  agregarEmp(){

    let miEmpleado=new Empleado(this.cuadroNom, this.cuadroApe, this.cuadroCar, this.cuadroSal);
    //this.miServicio.showMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadosService.addEmpleadoServicio(miEmpleado);
  }

  cuadroNom:string="";
  cuadroApe:string="";
  cuadroCar:string="";
  cuadroSal:number=0;




}
