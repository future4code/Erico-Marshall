export type Competition = {
    id: string,
    competicao: string,
    status?: STATUS_COMPETICAO,
}

export enum STATUS_COMPETICAO {
    ABERTA =  "aberta",
    FECHADA = "fechada"
}

export enum UNIDADE_COMPETICAO  {
    METROS = "m",
    SEGUNDOS = "s"
}

export type Athlete = {
    id: string,
    nome: string,
    competicao: string,
    value: number,
    unidade: UNIDADE_COMPETICAO
}

export type CompetitionResult = {
    competicao: string,
    atleta: string,
    value: number,
    unidade: UNIDADE_COMPETICAO
}