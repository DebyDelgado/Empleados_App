import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioEmpleadosService {

  constructor() { }

  showMensaje(mensaje:string){

    alert(mensaje);


  }
}
