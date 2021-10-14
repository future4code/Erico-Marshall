// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela

import axios from "axios";
import React from "react";
import { useHistory } from "react-router";
import { useEffect } from "react/cjs/react.development";
import { useProtectedPage } from "./AdminHome";
import { PageContainer } from "./style";

const TripDetailsPage = () => {
    useProtectedPage();

    const aluno = "erico-marshall-maryam";
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
        axios
        .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trip/:id`,{
            headers: {
              auth: token
            }
        })
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.log("Deu erro: ", error.response);
        });
    }, []);

    const handleClickBack = () => {
        history.goBack();
    };
    
    return (
        <PageContainer>
            <h1>Detalhes da Viagem</h1>
            <button onClick={handleClickBack}>Voltar</button>
        </PageContainer>
    )
}


export default TripDetailsPage;