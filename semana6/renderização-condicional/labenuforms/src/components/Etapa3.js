import styled from "styled-components";
import React from "react";

const Etapacorpo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export default class Etapa3 extends React.Component {


    render() {
        return (
            <Etapacorpo>
                <h1>
                    ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO
                </h1>
                <p>1. Por que você não terminou um curso de graduação?</p>
                <input type="text" id="gradIncompleta"></input>
                <br />
                <label for="cursoComplementar">2. Você fez algum curso complementar?</label>
                    <br />  
                    <select name="cursoComplementar" id="cursoComplementar">
                    <option value="cursoTecnico">Curso Técnico</option>
                    <option value="cursoIngles">Cursos de Inglês</option>
                    <option value="semCurso">Não fiz curso complementar</option>
                    </select>
                <br />    
            </Etapacorpo>
        );
  }
}