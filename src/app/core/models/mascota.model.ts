import { Dueno } from './dueno.model';

export interface Mascota {
  id: number;
  nombre: string;
  especie: string;
  raza: string;
  edad: number;
  peso: number;
  colorPelaje: string;
  fechaNacimiento: Date;
  dueno: Dueno; 
  genero?: 'Macho' | 'Hembra';
  esterilizado?: boolean;
}

export class MascotaClass implements Mascota {
  constructor(
    public id: number,
    public nombre: string,
    public especie: string,
    public raza: string,
    public edad: number,
    public peso: number,
    public colorPelaje: string,
    public fechaNacimiento: Date,
    public dueno: Dueno,
    public genero?: 'Macho' | 'Hembra',
    public esterilizado?: boolean
  ) {} 
}