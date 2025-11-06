import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FechaFormatoPipe } from './pipes/fecha-formato-pipe';
import { ResaltarCita } from './directives/resaltar-cita';

@NgModule({
  declarations: [
    FechaFormatoPipe,
    ResaltarCita,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
