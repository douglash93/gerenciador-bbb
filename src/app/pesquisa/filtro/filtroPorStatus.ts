import { Participante } from "src/app/cartao/participante.model";
import { FiltroInterface } from "./filtro.interface";

export class FiltroPorStatus implements FiltroInterface {

    proximo?: FiltroInterface

    constructor(
        private status: number,
    ) {
    }
    
    filtrar(participantes: Participante[]): Participante[] {

        if(this.status > 0) {
            participantes = 
                participantes.filter(x => x.status === Number(this.status));
        }

        if(!this.proximo) {
            return participantes;
        }

        return this.proximo?.filtrar(participantes);
    }    
}