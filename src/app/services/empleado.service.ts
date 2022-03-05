import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  constructor(private firestore: AngularFirestore) { }

  agregarEmpleado(empleado: any): Promise<any> {

  return this.firestore.collection('empleados').add(empleado);
}

  getEmpleados(): Observable<any> {
  return this.firestore.collection('empleados', ref => ref.orderBy('fechaCreacion', 'desc') ).snapshotChanges();
//ref => ref.orderBy('fechaCreacion', 'asc' esto es para ordenar por fecha en orden acsendene
}


eliminarEmpleado(id: string): Promise<any> {
  return this.firestore.collection('empleados').doc(id).delete();
}


}
