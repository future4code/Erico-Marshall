//Para o usuário escolher entre Área Administrativa e Lista de Viagens

import React from "react";
import { useHistory } from "react-router";
import { PageContainer, HomeButtons } from "./style";

const HomePage = () => {
    const history = useHistory();

    const goToAdmin = () => {
        history.push("/admin");
    };

    const goToTrips = () => {
        history.push("/trips");
    };

    return (
        <PageContainer>
            <h1>LabeX</h1>
            <HomeButtons>
                <button onClick={goToTrips}>Ver Viagens</button>
                <button onClick={goToAdmin}>Área de Admin</button>
            </HomeButtons>
        </PageContainer>
    )
}

export default HomePage;