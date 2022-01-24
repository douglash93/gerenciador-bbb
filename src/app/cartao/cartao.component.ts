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

  adicionaParedao(id: number) {
    this.adicionaParedaoEvent.emit(id);
  }

  eliminar(id: number) {
    this.eliminaEvent.emit(id);
  }

  desfazer(id: number) {
    this.desfazerEvent.emit(id);
  }

}
