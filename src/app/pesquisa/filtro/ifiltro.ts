import { Participante } from "src/app/cartao/participante.model";

export interface IFiltrar {
    proximo?: IFiltrar;
    filtrar(participantes: Participante[]): Participante[];
}