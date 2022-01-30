import { Participante } from "src/app/cartao/participante.model";

export interface FiltroInterface {
    proximo?: FiltroInterface;
    filtrar(participantes: Participante[]): Participante[];
}