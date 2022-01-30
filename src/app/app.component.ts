import { Component, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';
import { Participante } from './cartao/participante.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  
  estadoPesquisa = 'fechado';
  participantes: Participante[] = [];
  participantesExibir: Participante[] = [];

  ngOnInit(): void {
    this.participantes = environment.participantes;
    this.participantesExibir = environment.participantes;
    this.recuperarParticipantesLocalStorage();
  }

  abrirMenu() {
    this.estadoPesquisa = 'aberto';
  }

  fecharPesquisa() {
    this.estadoPesquisa = 'fechado'
  }

  limparFiltro() {
    this.participantesExibir = environment.participantes;
  }

  atualizaParticipantes(e: any) {
    this.participantesExibir = (e as Participante[]);
    this.fecharPesquisa();
  }

  atualizaParedao(id: Number) {
    this.atualizaStatusParticipante(2, id);
  }

  atualizaEliminado(id: Number) {
    this.atualizaStatusParticipante(3, id);
  }

  desfazer(id: Number) {
    this.atualizaStatusParticipante(1, id);
  }

  private atualizaStatusParticipante(status: Number, id: Number) {
    let indice = this.participantes.findIndex(x => x.id === id);
    this.participantes[indice].status = status;
    
    indice = this.participantesExibir.findIndex(x => x.id === id);
    this.participantesExibir[indice].status = status;
    this.salvarParticipantes();
  }

  private salvarParticipantes() {
    localStorage.setItem('bbb', JSON.stringify(this.participantes));
  }

  private recuperarParticipantesLocalStorage() {
    const participantes = localStorage.getItem('bbb');
    if (participantes) {
      this.participantesExibir = JSON.parse(participantes);
    }
  }
}
