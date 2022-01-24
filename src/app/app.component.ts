import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Participante } from './cartao/participante.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  
  estadoMenu = 'fechado';
  participantes: Participante[] = [];
  participantes2: Participante[] = [];

  ngOnInit(): void {
    this.participantes = environment.participantes;
    this.participantes2 = environment.participantes;
  }

  abrirMenu() {
    this.estadoMenu = 'aberto';
  }

  fecharMenu() {
    this.estadoMenu = 'fechado'
  }

  limparFiltro() {
    this.participantes2 = environment.participantes;
  }

  atualizaParticipantes(e: any) {
    this.participantes2 = (e as Participante[]);
  }

  atualizaParedao(id: Number) {
    const indice = this.participantes.findIndex(x => x.id === id)
    this.participantes[indice].status = 2;
    this.participantes2 = this.participantes;
  }

  atualizaEliminado(id: Number) {
    const indice = this.participantes.findIndex(x => x.id === id)
    this.participantes[indice].status = 3;
    this.participantes2 = this.participantes;
  }

  desfazer(id: Number) {
    const indice = this.participantes.findIndex(x => x.id === id)
    this.participantes[indice].status = 1;
    this.participantes2 = this.participantes;
  }

}
