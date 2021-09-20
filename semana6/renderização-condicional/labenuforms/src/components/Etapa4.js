import styled from "styled-components";
import React from "react";

const Etapacorpo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`
export default class Etapa4 extends React.Component {


    render() {
        return (
            <Etapacorpo>
                <h1>
                    Fim da pesquisa!
                </h1>
                <p>Obrigado por participar!</p>
            </Etapacorpo>
        );
  }
}