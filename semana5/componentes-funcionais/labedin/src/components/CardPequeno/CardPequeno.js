import React from 'react';
import './CardPequeno.css';
import styled from 'styled-components';

const LittleCardContainer = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    padding: 20px 10px;
    margin-bottom: 10px;
    height: 80px;

    img {
        width: 50px;
        margin-right: 10px;
        border-radius: 50%;
    }

    div {
        display: flex;
        justify-items: flex-start;
    }

    p {
        padding-left: 5px;
    }
`



function CardPequeno(props) {
    return (
        <LittleCardContainer>
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </LittleCardContainer>
    )
}

export default CardPequeno;