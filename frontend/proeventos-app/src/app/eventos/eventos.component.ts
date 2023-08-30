import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {

  public eventos: any;

  constructor(private service: HttpClient){}

  ngOnInit(): void {
    this.getEventos();
  }

  public getEventos(): void {
    this.service.get('http://localhost:5000/api/evento').subscribe(
      response => this.eventos = response,
      error => console.log(error)
    )
  }
}
