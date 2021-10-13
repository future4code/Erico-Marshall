// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela

import React from "react";
import { useHistory } from "react-router";
import { PageContainer } from "./style";

const TripDetailsPage = () => {
    const history = useHistory();

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