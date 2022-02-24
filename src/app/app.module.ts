import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EmpleadoHijoComponent } from './empleado-hijo/empleado-hijo.component';
import { CaractEmpleadoComponent } from './caract-empleado/caract-empleado.component';
import { ServicioEmpleadosService } from './servicio-empleados.service';
import { EmpleadosService } from './empleados.service';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ProyectComponentComponent } from './proyect-component/proyect-component.component';
import { AboutComponentComponent } from './about-component/about-component.component';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { RouterModule, Routes } from '@angular/router';
import { UpdateComponentComponent } from './update-component/update-component.component';
import { ErrorComponentComponent } from './error-component/error-component.component';

const appRoutes:Routes=[
{path: '', component:HomeComponentComponent},
{path:'proyect', component:ProyectComponentComponent},
{path:'about', component:AboutComponentComponent},
{path:'contact', component:ContactComponentComponent},
{path:'update/:id', component:UpdateComponentComponent},
{path:'**', component:ErrorComponentComponent} //el path del error siempre tiene que estar a lo ultimo 
  
];

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoHijoComponent,
    CaractEmpleadoComponent,
    HomeComponentComponent,
    ProyectComponentComponent,
    AboutComponentComponent,
    ContactComponentComponent,
    UpdateComponentComponent,
    ErrorComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ServicioEmpleadosService, EmpleadosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
