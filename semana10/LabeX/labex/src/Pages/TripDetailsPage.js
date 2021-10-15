// Para o administrador ver o detalhe de uma viagem específica, bem como os candidatos que aplicaram para ela
import axios from "axios";
import React, { useState } from "react";
import { useHistory, useParams } from "react-router";
import useGetTripDetail from "../Hooks/GetTripDetail";
import { useProtectedPage } from "./AdminHome";
import { PageContainer, TripElements, TripListContainer } from "./style";

const TripDetailsPage = () => {
    useProtectedPage();

    const params = useParams();
    const history = useHistory();

    const [trip, getTripDetail] = useGetTripDetail(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/erico-marshall-maryam/trip/${params.id}`)

    const [approvedCandidates, setApprovedCandidates] = useState([]);

    const handleClickBack = () => {
        history.goBack();
    };

    const decideCandidate = (tripId, candidateId, candidateName) => {
        const token = localStorage.getItem('token');
        const body = {
            approve: true
        }
        axios
        .put(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/erico-marshall-maryam/trips/${tripId}/candidates/${candidateId}/decide`,
        body, {headers: {
            "Content-Type": "application/json",
            auth: token}})
        .then(res => {
            setApprovedCandidates(...approvedCandidates, candidateName);
            alert("Candidato aprovado!");
            getTripDetail();
            console.log(res.data);
            console.log(approvedCandidates)
        })
        .catch(error => {
            console.log("deu erro! ",error.message);
        })
    }

    const pendentCandidates = trip.candidates && 
        trip.candidates.map(candidate => {
            return (
                <TripElements key={candidate.id}>
                    <p><strong>{candidate.name}</strong></p>
                    <p>{candidate.applicationText}</p>
                    <button onClick={() => decideCandidate(trip.id, candidate.id, candidate.name)}>Aceitar</button>
                </TripElements>
            )
    })

    // const approvedCandidatesList = approvedCandidates && 
    //     approvedCandidates.map(candidate => {
    //         return (
    //             <TripElements key={candidate}>
    //                 <p><strong>{candidate}</strong></p>
    //             </TripElements>
    //         )
    //     })

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
            {/* <h2>Candidatos Aprovados</h2> */}
            
            </TripListContainer>
        </PageContainer>
    )
}

export default TripDetailsPage;