import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//animaciones
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//modulos
import { AngularFireModule } from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ReactiveFormsModule } from '@angular/forms';

//componentes
import { AppComponent } from './app.component';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';
import { ListEmpleadosComponent } from './components/list/list-empleados.component';


import { NavbarComponent } from './components/navbar/navbar.component';
import { environment } from 'src/environments/environment';






@NgModule({
  declarations: [
    AppComponent,
    CreateEmpleadoComponent,
    ListEmpleadosComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
