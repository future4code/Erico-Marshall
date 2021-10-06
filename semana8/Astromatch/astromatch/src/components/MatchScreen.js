import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";


const MatchScreen = (props) => {

    const usuario = `erico-marshall-maryam`;
    const [currentMatches, setCurrentMatches] = useState([]);


    useEffect(() => {

        getMatches();
        props.getProfileToChoose();
    
    }, []);

    const getMatches = () => {
        axios
        .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${usuario}/matches`)
        .then(response => {
            setCurrentMatches(response.data.matches);
        })
        .catch(error => {
            alert("Oh não! Algo deu errado! Reinicie a página por favor!");
            console.log(error);
        });
    };

    const clearAllMatches = () => {

        axios
        .put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${usuario}/clear`)
        .then(response => {
          getMatches()
          props.getProfileToChoose();
        })
        .catch(error => {
          alert("Oh não! Algo deu errado! Reinicie a página por favor!");
          console.log(error);
        });
    };

    const allMatches = currentMatches.map(match => {
        return (
        <p key={match.name}>{match.name}</p>
        )
    });


    return (
        <div>
            <h2>Seus Matches</h2>
            <button onClick={() => clearAllMatches()}>Limpar Matches</button>
            {allMatches}
            <button onClick={() => props.handleClickSwitch("start")}>Voltar</button>
        </div>
    );
};

export default MatchScreen;