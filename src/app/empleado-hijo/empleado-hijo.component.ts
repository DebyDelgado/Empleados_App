import { Component, Input, OnInit } from '@angular/core';
import { Empleado } from '../empleado.model';

@Component({
  selector: 'app-empleado-hijo',
  templateUrl: './empleado-hijo.component.html',
  styleUrls: ['./empleado-hijo.component.css']
})
export class EmpleadoHijoComponent implements OnInit {

  @Input() empleadoI:Empleado;

  @Input() indice:number;

  arrayCaract=['']

    addCaract(newCaract:string){
      this.arrayCaract.push(newCaract);

    }


  
  constructor() { }

  ngOnInit(): void {
  }

}
