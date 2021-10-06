import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";
import MatchScreen from './components/MatchScreen';

const CardContainer = styled.div`
  img {
    width: 300px;
  }
`

const App = () => {

  const aluno = "erico-marshall-maryam";
  const headers = "application/json"
  const [screenProfile, setScreenProfile] = useState({});
  const [currentPage, setCurrentPage] = useState("start");

  useEffect(() => {

    getProfileToChoose();

  }, []);

  const getProfileToChoose = () => {

    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`, headers)
    .then(response => {
    setScreenProfile(response.data.profile);
    })
    .catch(error => {
      alert("Oh não! Algo deu errado! Reinicie a página por favor!");
      console.log(error);
    });
  };

  const choosePerson = (choosePerson) => {
    const body = {
      id: screenProfile.id,
      choice: choosePerson,
    }

    axios
    .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`, body, headers)
    .then(response => {
      getProfileToChoose();
    })    
    .catch(error => {
      alert("Oh não! Algo deu errado! Reinicie a página por favor!");
      console.log(error);
    });
  };

  const handleLike = () => {
    choosePerson(true);
  };

  const handleDislike = () => {
    choosePerson(false);
  };

  const handleClickSwitch = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "start":
        if (screenProfile) {
        return (
          <div>
            <CardContainer>
              <button onClick={() => handleClickSwitch("matchScreen")}>Ir para matches</button>
              <p>{screenProfile.name}</p>
              <img src={screenProfile.photo} alt={screenProfile.name}/>
              <p>{screenProfile.age} Anos</p>
              <p>{screenProfile.bio}</p>
            </CardContainer>
            <button onClick={handleDislike}>Não Curti</button>
            <button onClick={handleLike}>Curti</button>
          </div>
        )
        } else {
          return (
            <div>
              <button onClick={() => handleClickSwitch("matchScreen")}>Ir para matches</button>
              <h1>Oh não! Acabaram os perfis!</h1>
            </div>
          )
        }
      case "matchScreen":
        return <MatchScreen
          handleClickSwitch={handleClickSwitch}
          getProfileToChoose={getProfileToChoose}
        />
      default:
        return <h1>Oops! Algo deu errado!</h1>
    }
  };

  return (
    <div className="App">
      <h1>AstroMatch</h1>
      {renderPage()}

    </div>
  );
};

export default App;