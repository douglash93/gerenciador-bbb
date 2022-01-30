import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Participante } from './participante.model';

@Component({
  selector: 'app-cartao',
  templateUrl: './cartao.component.html',
  styleUrls: ['./cartao.component.css']
})
export class CartaoComponent implements OnInit {

  @Input() participante?: Participante;
  @Output() adicionaParedaoEvent = new EventEmitter<Number>();
  @Output() eliminaEvent = new EventEmitter<Number>();
  @Output() desfazerEvent = new EventEmitter<Number>();

  constructor() { }

  ngOnInit(): void {
  }

  adicionaParedao(id: Number) {
    this.adicionaParedaoEvent.emit(id);
  }

  eliminar(id: Number) {
    this.eliminaEvent.emit(id);
  }

  desfazer(id: Number) {
    this.desfazerEvent.emit(id);
  }

  get status(): string {
    switch (this.participante?.status) {
      case 1: 
        return 'No jogo';
      case 2: 
        return 'No paredão';
      case 3:
        return 'Eliminado(a)';
      default:
        return 'Desconhecido'
    }
  }

}
