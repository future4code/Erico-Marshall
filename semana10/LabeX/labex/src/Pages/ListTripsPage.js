//Para vermos todas as viagens

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { PageContainer, TripListContainer } from "./style";


const ListTripsPage = () => {

    useEffect(() => {
        getTrips();
    }, []);

    const aluno = "erico-marshall-maryam";

    const [tripsList, setTripsList] = useState([]);

    const history = useHistory();

    const handleClickBack = () => {
        history.goBack();
    };

    const getTrips = async () => {
        try {
            await axios
            .get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/${aluno}/trips`)
            .then(response => {
                setTripsList(response.data.trips)
            })
        } catch(error) {
            console.log(error);
        }
    }

    const allTrips = tripsList.map(trip => {
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
            <button onClick={handleClickBack}>Voltar</button>
            {allTrips}
        </PageContainer>
    )
}

export default ListTripsPage;