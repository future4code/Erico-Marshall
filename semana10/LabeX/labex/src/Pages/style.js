import styled from "styled-components";

//Estilo Global para Botões e container
export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #81C3E0;
    color: white;

    button {
        width: 100px;
        min-height: 30px;
        max-height: max-content;
        border-radius: 5px;
        border: none;
        margin: 0 30px;
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: bold;
        background-color: #385561;
        color: white;
    }

    button:hover {
        background-color: #5D8CA1;
        cursor: pointer;
    }

    button:active {
        color: lightgray;
    }
`


//Estilo da região dos botões da Home
export const HomeButtons = styled.div`
    margin-top: 30vh;
    height: 61.7vh;
`

//Estilo da Lista de Viagens
export const TripListContainer = styled.div`
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 20px;
    padding: 15px;
    width: 500px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #5D8CA1;
    color: white;
`