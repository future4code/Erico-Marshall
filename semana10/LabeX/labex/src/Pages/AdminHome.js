//Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

import React from "react";
import { useHistory } from "react-router-dom";
import { PageContainer } from "./style";

const AdminHome = () => {
    const history = useHistory();

    const handleClickBack = () => {
        history.goBack();
    };

    const goToCreateTrip = () => {
        history.push("/create-trip");
    }

    return (
            <PageContainer>
                <h1>Painel Administrativo</h1>
                <div>
                    <button onClick={handleClickBack}>Voltar</button>
                    <button onClick={goToCreateTrip}>Criar Viagem</button>
                    <button>Logout</button>
                </div>
                <h2>Lista Viagens</h2>
            </PageContainer>
    ) 
}

export default AdminHome;