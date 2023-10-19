import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {

  public eventos: any = [];
  public eventosFiltrados: any = [];
  mostrarImagens: boolean = true;
  //private _pesquisar: string = '';
  //@Input() _pesquisar: string = ''
  private _pesquisar: string = ''

  constructor(private service: HttpClient){}

  public set pesquisar(texto:  string){
    this._pesquisar = texto;    
    var campo = texto.toLowerCase();
    this.eventosFiltrados = this._pesquisar ? this.filtrarEventos(campo) : this.eventos;
  }

  filtrarEventos(texto: string) : any {
    return this.eventos.filter(
      ((evento: any) => evento.tema.toLocaleLowerCase().indexOf(texto.toLocaleLowerCase()) !== -1)
    )
  }

  public get pesquisar() {
    return this._pesquisar;
  }

  ngOnInit(): void {
    this.getEventos();
  }

  public toggleImage() {
    this.mostrarImagens = !this.mostrarImagens;
  }

  public getEventos(): void {
    this.service.get('http://localhost:5000/api/evento').subscribe(
      response => {
        this.eventos = response;
        this.eventosFiltrados = this.eventos;
      },
      error => console.log(error)
    )
  }
}
