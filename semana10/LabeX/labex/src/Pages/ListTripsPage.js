//Para vermos todas as viagens

import React from "react";
import { useHistory } from "react-router";
import { useGetAllTrips } from "../Hooks/GetTrips";
import { ButtonsContainer, PageContainer, TripListContainer } from "./style";

const ListTripsPage = () => {

    const [trips] = useGetAllTrips(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/erico-marshall-maryam/trips`);

    const history = useHistory();

    const handleClickBack = () => {
        history.push("/");
    };

    const handleClickToForm = () => {
        history.push('/trips/aplication');
    };

    const allTrips = trips && 
        trips.map(trip => {
            return (
                <TripListContainer key={trip.id}>
                    <p><strong>Nome: </strong>{trip.name}</p>
                    <p><strong>Descrição: </strong>{trip.description}</p>
                    <p><strong>Planeta: </strong>{trip.planet}</p>
                    <p><strong>Duração: </strong>{trip.durationInDays} dias</p>
                    <p><strong>Data: </strong>{trip.date}</p>
                </TripListContainer>
            )
    })

    return (
        <PageContainer>
            <h1>Lista das Viagens</h1>
            <ButtonsContainer>
                <button onClick={handleClickBack}>Voltar</button>
                <button onClick={handleClickToForm}>Inscrever-se</button>
            </ButtonsContainer>
            {allTrips}
        </PageContainer>
    )
}

export default ListTripsPage;