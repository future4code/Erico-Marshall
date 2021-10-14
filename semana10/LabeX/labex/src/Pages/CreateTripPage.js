//Formulário para o administrador criar uma nova viagem

import React from "react";
import { useHistory } from "react-router";
import { PageContainer } from "./style";
import { useEffect } from "react";
import { useProtectedPage } from "./AdminHome";

const CreateTripPage = () => {
    useProtectedPage();
    
    const history = useHistory();

    const handleClickBack = () => {
        history.goBack();
    };

    return (
        <PageContainer>
            <h1>Formulário para o Adm criar uma nova viagem</h1>
            <button onClick={handleClickBack}>Voltar</button>
        </PageContainer>
    )
}

export default CreateTripPage;