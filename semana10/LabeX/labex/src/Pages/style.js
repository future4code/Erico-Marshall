import styled from "styled-components";

//Estilo Global para Botões e container
export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;

    button {
        min-width: 100px;
        max-width: 200px;
        min-height: 30px;
        max-height: max-content;
        padding: 10px;
        border-radius: 5px;
        border: none;
        margin: 0 30px;
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: bold;
        background-color: #385561;
        color: white;
        opacity: 0.8;
    }

    button:hover {
        opacity: 1;
        cursor: pointer;
    }

    button:active {
        color: lightgray;
    }
`

export const ButtonsContainer = styled.div`
    display: flex;
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

    p {
        margin: 10px 0;
    }

    h2 {
        align-self: center;
    }
`

export const TripElements = styled.div`
    display: flex;
    vertical-align: middle;
    justify-content: space-between;

    button {
        margin-bottom: 0;
    }

`


//Estilo dos Inputs de Login
export const LoginContainer = styled.div`
    margin-top: 30vh;
    height: 61.7vh;

    input {
        font-size: 16px;
        width: 200px;
        margin: 0 20px;
        height: 30px;
        border-radius: 5px;
        border: none;
    }
`

//Estilo do Formulário
export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 62.15vh;

    form {
        display: flex;
        flex-direction: column;
        width: 600px;
        margin: 40px 0;

        input {
        height: 30px;
        border: 0;
        padding: 0.5rem;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        font-size: 16px;

            & + input {
                margin-top: 20px;
            }
        }

        select {
        margin-top: 20px;
        margin-bottom: 20px;
        height: 40px;
        border: 0;
        padding: 0.5rem;
        border: 1px solid #e2e8f0;
        border-radius: 10px;
        font-size: 16px;
        }

        button {
            align-self: center;
            margin-top: 20px;
        }

    }
`