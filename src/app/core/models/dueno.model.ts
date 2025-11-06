export interface Dueno {
  id: number;
  nombre: string;
  apellido: string;
  telefono: string;
  email: string;
  direccion: string;
  documentoIdentidad?: string;
}

export class DuenoClass implements Dueno {
  constructor(
    public id: number,
    public nombre: string,
    public apellido: string,
    public telefono: string,
    public email: string,
    public direccion: string,
    public documentoIdentidad?: string
  ) {}

  obtenerNombreCompleto(): string {
    return `${this.nombre} ${this.apellido}`;
  }

  validarEmail(): boolean {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(this.email);
  }

  validarTelefono(): boolean { 
    const regex = /^9\d{8}$/;
    return regex.test(this.telefono);
  }
}