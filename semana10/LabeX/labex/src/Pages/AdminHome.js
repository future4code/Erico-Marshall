//Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { PageContainer, TripListContainer } from "./style";
import { useGetAllTrips } from "../Hooks/GetTrips";

export const useProtectedPage = () => {
    const history = useHistory();

    useEffect(() => {
        const token = window.localStorage.getItem('token');
        if(token === null) {
            history.push('/login')
        }
    }, [history]);
};

const AdminHome = () => {
    useProtectedPage();

    const aluno = "erico-marshall-maryam";
    const history = useHistory();
    const [trips] = useGetAllTrips(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`);

    const handleClickBack = () => {
        history.push("/");
    };

    const goToCreateTrip = () => {
        history.push("/admin/create");
    }

    const goToTripDetail = (tripId) => {
        history.push(`/admin/trip/${tripId}`)
    }

    const logoutUser = () => {
        window.localStorage.clear();
        history.push('/');
    }

    const allTrips = trips && trips.map(trip => {
        return (
            <TripListContainer key={trip.id}>
                <p><strong>Nome: </strong>{trip.name}</p>
                <button onClick={() => goToTripDetail(trip.id)}>Detalhes</button>
            </TripListContainer>
        )
    })

    return (
            <PageContainer>
                <h1>Painel Administrativo</h1>
                <div>
                    <button onClick={handleClickBack}>Voltar</button>
                    <button onClick={goToCreateTrip}>Criar Viagem</button>
                    <button onClick={logoutUser}>Logout</button>
                </div>
                <h2>Lista Viagens</h2>
                {allTrips}
            </PageContainer>
    ) 
}

export default AdminHome;