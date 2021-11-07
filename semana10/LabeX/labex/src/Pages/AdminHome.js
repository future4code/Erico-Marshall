//Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { PageContainer, ButtonsContainer, TripListContainer, TripElements } from "./style";
import axios from "axios";
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

    const history = useHistory();

    const handleClickBack = () => {
        history.push("/");
    };

    const goToCreateTrip = () => {
        history.push("/admin/create");
    };

    const goToTripDetail = (tripId) => {
        history.push(`/admin/trip/${tripId}`);
    };

    const logoutUser = () => {
        window.localStorage.clear();
        history.push('/');
    };

    const [trips, getAllTrips] = useGetAllTrips(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/erico-marshall-maryam/trips`);

    const deleteTrip = (id) => {
        const token = localStorage.getItem('token');
        axios
        .delete(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/erico-marshall-maryam/trips/${id}`, {
            headers: {
                auth: token
            }
        })
        .then((res) => {
            getAllTrips();
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err.message);
        });
    };
    
    const allTrips = trips && trips.map(trip => {
        return (
            <TripListContainer key={trip.id}>
                <TripElements>
                    <p><strong>Nome: </strong>{trip.name}</p>
                    <button onClick={() => goToTripDetail(trip.id)}>Detalhes</button>
                    <button onClick={() => deleteTrip(trip.id)}>Deletar</button>
                </TripElements>
            </TripListContainer>
        )
    })

    return (
            <PageContainer>
                <h1>Painel Administrativo</h1>
                <ButtonsContainer>
                    <button onClick={handleClickBack}>Voltar</button>
                    <button onClick={goToCreateTrip}>Criar Viagem</button>
                    <button onClick={logoutUser}>Logout</button>
                </ButtonsContainer>
                <h2>Lista Viagens</h2>
                {allTrips}
            </PageContainer>
    ) 
};

export default AdminHome;