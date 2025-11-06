import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MascotasService } from '../../core/services/mascotas.service';
import { CitasService } from '../../core/services/citas.service';
import { Mascota } from '../../core/models/mascota.model';
import { Veterinario } from '../../core/models/veterinario.model';
import { Cita } from '../../core/models/cita.model';
import { VETERINARIOS_MOCK } from '../../../backend/data/veterinarios.data';

@Component({
  selector: 'app-agenda-citas',
  templateUrl: './agenda-citas.html',
  styleUrls: ['./agenda-citas.scss']
})
export class AgendaCitasComponent implements OnInit {
  citaForm!: FormGroup;
  mascotas: Mascota[] = [];
  veterinarios: Veterinario[] = VETERINARIOS_MOCK;
  fechaMinima: string;

  constructor(
    private fb: FormBuilder,
    private mascotasService: MascotasService,
    private citasService: CitasService,
    private router: Router
  ) {
    // Fecha mínima es hoy
    const hoy = new Date();
    this.fechaMinima = hoy.toISOString().split('T')[0];
  }

  ngOnInit(): void {
    this.crearFormulario();
    this.cargarMascotas();
  }

  crearFormulario(): void {
    this.citaForm = this.fb.group({
      mascotaId: ['', Validators.required],
      fecha: ['', Validators.required],
      hora: ['', Validators.required],
      veterinarioId: ['', Validators.required],
      motivo: ['', Validators.required],
      observaciones: ['']
    });
  }

  cargarMascotas(): void {
    this.mascotasService.obtenerTodasMascotas().subscribe(mascotas => {
      this.mascotas = mascotas;
    });
  }

  agendarCita(): void {
    if (this.citaForm.invalid) {
      alert('Por favor completa todos los campos');
      return;
    }

    const formValue = this.citaForm.value;
    const mascotaId = Number(formValue.mascotaId);
    const veterinarioId = Number(formValue.veterinarioId);

    const mascota = this.mascotas.find(m => m.id === mascotaId);
    const veterinario = this.veterinarios.find(v => v.id === veterinarioId);

    if (!mascota || !veterinario) {
      alert('Error al buscar mascota o veterinario');
      return;
    }

    const nuevaCita: Cita = {
      id: 0,
      mascotaId: mascotaId,
      fecha: new Date(formValue.fecha),
      hora: formValue.hora,
      motivo: formValue.motivo,
      veterinario: veterinario,
      estado: 'Pendiente' as any,
      observaciones: formValue.observaciones || ''
    };

    this.citasService.agregarCita(nuevaCita);
    alert('Cita agendada exitosamente!');
    this.router.navigate(['/citas']);
  }
}