import { Participante } from "src/app/cartao/participante.model";
import { IFiltrar } from "./ifiltro";

export class FiltroPorId implements IFiltrar {

    proximo?: IFiltrar

    constructor(
        private id: number,
    ) {
    }
    
    filtrar(participantes: Participante[]): Participante[] {

        debugger;
        if(this.id > 0) {
            participantes = participantes.filter(x => x.id === Number(this.id));
        }

        if(!this.proximo) {
            return participantes;
        }

        return this.proximo?.filtrar(participantes);
    }   

}