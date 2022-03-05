import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { EmpleadoService } from '../../services/empleado.service';

@Component({
  selector: 'app-list-empleados',
  templateUrl: './list-empleados.component.html',
  styleUrls: ['./list-empleados.component.css'],
})
export class ListEmpleadosComponent implements OnInit {

  loading = false;
  
empleados: any [] = [];

  constructor(private _empleadoService: EmpleadoService,
    private toastr: ToastrService) {
    //estamos declarando esto para los estilos
 
  }

  ngOnInit(): void {
    this.getEmpleados()
  }


  getEmpleados(){
    this._empleadoService.getEmpleados().subscribe(data => {
      this.empleados = [];
      data.forEach((element:any) => {
        // console.log(element.payload.doc.data());

        this.empleados.push({
          id: element.payload.doc.id,
          ...element.payload.doc.data()
        })
      });
     console.log(this.empleados);
     
    
    });
  }

  eliminarEmpleado(id: string){

    this.loading=true;


    this._empleadoService.eliminarEmpleado(id).then(() => {
      
      this.toastr.error('El empleado ha sido eliminado con exito!','Registro Eliminado');

      console.log('Empleado eliminado con exito!')

      this.loading = false;
      
    
      
    }).catch (error => {
      console.log(error);
      
      this.loading = false;

    })
  }

}
