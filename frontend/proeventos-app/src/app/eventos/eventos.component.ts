import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {

  public eventos: any = [];
  mostrarImagens: boolean = true;
  @Input() listaEvento: string = ''

  constructor(private service: HttpClient){}

  ngOnInit(): void {
    this.getEventos();
  }

  public toggleImage() {
    this.mostrarImagens = !this.mostrarImagens;
  }

  public getEventos(): void {
    this.service.get('http://localhost:5000/api/evento').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    )
  }
}
