import { Participante } from "src/app/cartao/participante.model";
import { IFiltrar } from "./ifiltro";

export class FiltroPorUF implements IFiltrar {

    proximo?: IFiltrar

    constructor(
        private uf: string,
    ) {
    }
    
    filtrar(participantes: Participante[]): Participante[] {

        if(this.uf) {
            participantes = participantes.filter(x => x.uf === this.uf);
        }

        if(!this.proximo) {
            return participantes;
        }

        return this.proximo?.filtrar(participantes);
    }     
}