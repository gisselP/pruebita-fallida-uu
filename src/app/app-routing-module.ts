import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home';
/* import { ListaMascotasComponent } from './pages/lista-mascotas/lista-mascotas';
import { RegistroMascotaComponent } from './pages/registro-mascota/registro-mascota';
 */import { AgendaCitasComponent } from './pages/agenda-citas/agenda-citas';
import { HistorialMascotaComponent } from './features/historial/pages/historial-mascota/historial-mascota';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent,
    pathMatch: 'full'
  },
  { 
    path: 'agendar-cita', 
    component: AgendaCitasComponent 
  },
 /*  { 
    path: 'mascotas', 
    component: ListaMascotasComponent 
  },
  { 
    path: 'mascotas/registro', 
    component: RegistroMascotaComponent 
  }, */
  { 
    path: 'mascotas/:id',
    component: HistorialMascotaComponent 
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }