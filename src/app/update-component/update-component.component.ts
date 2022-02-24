import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado.model';
import { EmpleadosService } from '../empleados.service';
import { ServicioEmpleadosService } from '../servicio-empleados.service';

@Component({
  selector: 'app-update-component',
  templateUrl: './update-component.component.html',
  styleUrls: ['./update-component.component.css']
})
export class UpdateComponentComponent implements OnInit {

  constructor(private router:Router, private route:ActivatedRoute, private miServicio:ServicioEmpleadosService, private empleadosService:EmpleadosService) { }

  empleados:Empleado[]=[];

  action:number;
  
  ngOnInit(): void {

    this.action=parseInt(this.route.snapshot.queryParams['action']);

    this.empleados=this.empleadosService.empleados;

    this.indice=this.route.snapshot.params['id'];

    let empleado:Empleado=this.empleadosService.findEmpleado(this.indice);

    this.cuadroNom=empleado.nombre;

    this.cuadroApe=empleado.apellido;

    this.cuadroCar=empleado.cargo;

    this.cuadroSal=empleado.salario;
  }
  


  backHome(){
    
    this.router.navigate([""]);

  }
  /*updateEmp(){

    let miEmpleado=new Empleado(this.cuadroNom, this.cuadroApe, this.cuadroCar, this.cuadroSal);
    //this.miServicio.showMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadosService.updateEmpleado(this.indice,miEmpleado);
    this.router.navigate([""]);
  }

  deleteEmp(){

    this.empleadosService.deleteEmpleado(this.indice);
    this.router.navigate([""]);

  }*/

  updateEmp(){

    if(this.action==1){
    let miEmpleado=new Empleado(this.cuadroNom, this.cuadroApe, this.cuadroCar, this.cuadroSal);
    //this.miServicio.showMensaje("Nombre del empleado: " + miEmpleado.nombre);
    this.empleadosService.updateEmpleado(this.indice,miEmpleado);

    this.router.navigate([""]);
  }
  else {
    
    this.empleadosService.deleteEmpleado(this.indice);

    this.router.navigate([""]);
  }
}

  

  cuadroNom:string="";
  cuadroApe:string="";
  cuadroCar:string="";
  cuadroSal:number=0;

  indice:number;


 }


