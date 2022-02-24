import { Injectable } from "@angular/core";
import { Empleado } from "./empleado.model";
import { ServicioEmpleadosService } from "./servicio-empleados.service";

@Injectable()

export class EmpleadosService{

    constructor(private servicioPopUp:ServicioEmpleadosService){}

    empleados:Empleado[]=[
        new Empleado("Deby","Delgado","Programadora",90000),
        new Empleado("Juan","Martinez","Scrum",100000),
        new Empleado("Ana","Muñoz","IT",80000),
        new Empleado("Laura","Gonzalez","Administracion",70000),
    
    
      ];


      addEmpleadoServicio(empleado:Empleado){

        this.servicioPopUp.showMensaje("Persona a agregar: " + "\n" + empleado.nombre
        + "\n" + "Salario: " + empleado.salario);

        this.empleados.push(empleado);

      }

      findEmpleado(indice:number){
        let empleado:Empleado=this.empleados[indice];
        return empleado;
      }

      updateEmpleado(indice:number, empleado:Empleado){

        let empleadoMod=this.empleados[indice];

        empleadoMod.nombre=empleado.nombre;
        empleadoMod.apellido=empleado.apellido;
        empleadoMod.cargo=empleado.cargo;
        empleadoMod.salario=empleado.salario;
    
      }

      deleteEmpleado(indice:number){

        this.empleados.splice(indice,1);
      }


}