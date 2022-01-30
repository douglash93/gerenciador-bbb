import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { FiltroPorId } from './filtro/filtroPorId';
import { FiltroPorStatus } from './filtro/filtroPorStatus';
import { FiltroPorUF } from './filtro/filtroPorUF';
import { Participante } from '../cartao/participante.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pesquisa',
  templateUrl: './pesquisa.component.html',
  styleUrls: ['./pesquisa.component.css'],
  animations: [
    trigger('estadoPesquisa', [
      state('fechado', style({
        transform: 'translate(100%, 0%)',
      })),
      state('aberto', style({
        transform: 'translate(0%, 0%)',
        right: '0px'
      })),
      transition('fechado <=> aberto', animate('200ms ease-in'))
    ]),
    trigger('background', [
      state('fechado', style({
        transform:  'translate(100%, 0%)',
      })),
      state('aberto', style({
        transform:    'translate(0%, 0%)',
      })),
      transition('fechado <=> aberto', animate('5ms ease-in'))
    ]),
  ]
})
export class PesquisaComponent implements OnInit {

  frmPesquisa: FormGroup = new FormGroup({});
  ufs: String[] = [];

  @Input() estadoPesquisa: string = 'fechado';
  @Input() participantes: Participante[] = []; 
  @Output() fecharPesquisaEvent = new EventEmitter();
  @Output() atualizaListaParticipantesEvent = new EventEmitter<Participante[]>();

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.frmPesquisa = this.formBuilder.group({
      id: [0],
      uf: [null],
      status: [1]  
    });

    const ufs = this.participantes.map(x => x.uf);
    this.ufs = Array.from(new Set(ufs));
  }

  fechar() {
    this.fecharPesquisaEvent.emit();
  }

  filtrar() {
    const filtroPorStatus = new FiltroPorStatus(this.frmPesquisa.get('status')?.value);
    const filtroPorUF = new FiltroPorUF(this.frmPesquisa.get('uf')?.value);
    const filtroPorId = new FiltroPorId(this.frmPesquisa.get('id')?.value);

    filtroPorStatus.proximo = filtroPorUF;
    filtroPorUF.proximo = filtroPorId;
    
    this.frmPesquisa.reset();
    const participantesFiltrados = filtroPorStatus.filtrar(this.participantes);
    this.atualizaListaParticipantesEvent.emit(participantesFiltrados);
  }

}
