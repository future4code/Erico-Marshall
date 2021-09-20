import styled from "styled-components";
import React from "react";

const Etapacorpo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export default class Etapa2 extends React.Component {


    render() {
        return (
            <Etapacorpo>
                <h1>
                    ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR
                </h1>
                <p>1. Qual o curso?</p>
                <input type="text" id="cursoUsuario"></input>
                <p>2. Qual unidade de ensino?</p>
                <input type="text" id="unidadeEnsinoUsuario"></input>
                <br />
            </Etapacorpo>
        );
  }
}
