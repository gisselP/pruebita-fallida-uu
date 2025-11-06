import { Component, OnInit, signal } from '@angular/core';
import { DataInitService } from '../backend/init';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})

export class App {
  protected readonly title = signal('killa-vet');

  constructor(private dataInitService: DataInitService) {}

  ngOnInit(): void {
    this.dataInitService.inicializarDatos();
  }
}