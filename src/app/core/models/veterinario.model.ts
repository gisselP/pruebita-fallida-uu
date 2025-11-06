export interface Veterinario {
  id: number;
  nombre: string;
  apellido: string;
  especialidad: string;
  telefono: string;
  email: string;
  numeroLicencia: string;
  horarioAtencion?: string;
}

export class VeterinarioClass implements Veterinario {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public especialidad: string,
    public telefono: string,
    public email: string,
    public numeroLicencia: string,
    public horarioAtencion?: string
  ) {}

  obtenerNombreCompleto(): string {
    return `Dr(a). ${this.nombre} ${this.apellido}`;
  }

  obtenerCredencial(): string {
    return `${this.obtenerNombreCompleto()} - ${this.especialidad}`;
  }
}