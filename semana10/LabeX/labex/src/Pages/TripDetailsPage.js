// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela
import React from "react";
import { useHistory, useParams } from "react-router";
import useGetTripDetail from "../Hooks/GetTripDetail";
import { useProtectedPage } from "./AdminHome";
import { PageContainer, TripElements, TripListContainer } from "./style";

const TripDetailsPage = () => {
    useProtectedPage();

    const params = useParams();
    const history = useHistory();

    const [trip] = useGetTripDetail(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/erico-marshall-maryam/trip/${params.id}`)
    
    const handleClickBack = () => {
        history.goBack();
    };

    const pendentCandidates = trip.candidates.map(candidate => {
        return (
            <TripElements>
                <p>{candidate.name}</p>
                {/* <button>Aprovar</button> */}
            </TripElements>
        )
    })
    
    return (
        <PageContainer>
            <h1>Detalhes da Viagem</h1>
            {trip.name && <h2>{trip.name}</h2>}
            <button onClick={handleClickBack}>Voltar</button>
            <TripListContainer>
            {trip.name && <p><strong>Nome: </strong>{trip.name}</p>}
            {trip.description && <p><strong>Descrição: </strong>{trip.description}</p>}
            {trip.planet && <p><strong>Planeta: </strong>{trip.planet}</p>}
            {trip.durationInDays && <p><strong>Duração: </strong>{trip.durationInDays} dias</p>}
            {trip.date && <p><strong>Data: </strong>{trip.date}</p>}
            <h2>Candidatos Pendentes</h2>
            {pendentCandidates}
            <h2>Candidatos Aprovados</h2>
            </TripListContainer>
        </PageContainer>
    )
}

export default TripDetailsPage;