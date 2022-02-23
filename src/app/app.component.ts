import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Empleados';

  empleados:Empleado[]=[
    new Empleado("Deby","Delgado","Programadora",90000),
    new Empleado("Juan","Martinez","Scrum",100000),
    new Empleado("Ana","Muñoz","IT",80000),
    new Empleado("Laura","Gonzalez","Administracion",70000),


  ];

  agregarEmp(){
    let miEmpleado=new Empleado(this.cuadroNom, this.cuadroApe, this.cuadroCar, this.cuadroSal);
    this.empleados.push(miEmpleado); //metodo push hace que el empleado de la funcion se guarde en el array


  }

  cuadroNom:string="";
  cuadroApe:string="";
  cuadroCar:string="";
  cuadroSal:number=0;



}
