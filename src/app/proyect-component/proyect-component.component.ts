import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-proyect-component',
  templateUrl: './proyect-component.component.html',
  styleUrls: ['./proyect-component.component.css']
})
export class ProyectComponentComponent implements OnInit {

  constructor(private router:Router, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { }

  empleados:Empleado[]=[];
  
  ngOnInit(): void {
    this.empleados=this.empleadosService.empleados;
  }
  


  backHome(){
    
    this.router.navigate([""]);

  }
  agregarEmp(){

    let miEmpleado=new Empleado(this.cuadroNom, this.cuadroApe, this.cuadroCar, this.cuadroSal);
    //this.miServicio.showMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadosService.addEmpleadoServicio(miEmpleado);
    this.router.navigate([""]);
  }

  cuadroNom:string="";
  cuadroApe:string="";
  cuadroCar:string="";
  cuadroSal:number=0;




}
