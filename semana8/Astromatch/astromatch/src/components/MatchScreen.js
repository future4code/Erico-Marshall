import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as ReactBootStrap from "react-bootstrap";
import { MatchesContainer, MatchRow } from '../style'; 

const MatchScreen = (props) => {

    const usuario = `erico-marshall-maryam`;
    const [currentMatches, setCurrentMatches] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {

        getMatches();
        props.getProfileToChoose();
    
    }, []);

    const getMatches = async () => {
        try {
            await axios
            .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${usuario}/matches`)
            .then(response => {
                setCurrentMatches(response.data.matches);
            });
            setLoading(true);
        } catch(error) {
            alert("Oh não! Algo deu errado! Reinicie a página por favor!");
            console.log(error);
        };
    };

    const clearAllMatches = async () => {
        try {
            await axios
            .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${usuario}/clear`)
            .then(response => {
            getMatches()
            props.getProfileToChoose();
            });
            setLoading(true);
        } catch(error) {
          alert("Oh não! Algo deu errado! Reinicie a página por favor!");
          console.log(error);
        };
    };

    const allMatches = currentMatches.map(match => {
        return (
            <MatchRow>
                <p key={match.name}><img src={match.photo} alt={match.name} />{match.name}</p>
            </MatchRow>

        )
    });


    return (
        <MatchesContainer>
            <h2>Seus Matches</h2>
            <button onClick={() => clearAllMatches()}>Limpar Matches</button>
            {loading ? 
            allMatches :<ReactBootStrap.Spinner animation="border" />}
            <button onClick={() => props.handleClickSwitch("start")}>Voltar</button>
        </MatchesContainer>
    );
};

export default MatchScreen;