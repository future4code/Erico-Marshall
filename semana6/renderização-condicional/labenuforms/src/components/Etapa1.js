import styled from "styled-components";
import React from "react";

const Etapacorpo = styled.div`
    form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }

`
export default class Etapa1 extends React.Component {
    render() {
        return (
        <Etapacorpo>
            <h1>
                ETAPA 1 - DADOS GERAIS
            </h1>
            <form>
                <p>1. Qual o seu nome?</p>
                <input type="text" id="nomeUsuario"></input>
                <p>2. Qual a sua idade?</p>
                <input type="number" id="idadeUsuario"></input>
                <p>3. Qual o seu email?</p>
                <input type="email" id="emailUsuario"></input>
                <br />
                <label for="escolaridade">4. Qual a sua escolaridade?</label>
                    <br />  
                    <select name="escolaridade" id="escolaridade">
                    <option value="ensinoMedioInc">Ensino Médio Incompleto</option>
                    <option value="ensinoMedioComp">Ensino Médio Completo</option>
                    <option value="ensinoSuperiorInc">Ensino Superior Incompleto</option>
                    <option value="ensinoSuperiorComp">Ensino Superior Completo</option>
                    </select>
                <br />
            </form>    
        </Etapacorpo>
        );
    }
}