import { Participante } from "src/app/cartao/participante.model";
import { FiltroInterface } from "./filtro.interface";

export class FiltroPorId implements FiltroInterface {

    proximo?: FiltroInterface

    constructor(
        private id: number,
    ) {
    }
    
    filtrar(participantes: Participante[]): Participante[] {

        if(this.id > 0) {
            participantes = 
                participantes.filter(x => x.id === Number(this.id));
        }

        if(!this.proximo) {
            return participantes;
        }

        return this.proximo?.filtrar(participantes);
    }   

}