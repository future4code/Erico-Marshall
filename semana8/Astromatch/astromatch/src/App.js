import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { CardContainer, AppContainer, HomeContainer, ButtonContainer } from './style';
import MatchScreen from './components/MatchScreen';
import * as ReactBootStrap from "react-bootstrap";

const App = () => {

  const aluno = "erico-marshall-maryam";
  const headers = "application/json"
  const [screenProfile, setScreenProfile] = useState({});
  const [currentPage, setCurrentPage] = useState("start");
  const [loading, setLoading] = useState(false);

  useEffect(() => {

    getProfileToChoose();

  }, []);

  const getProfileToChoose = async () => {
    try {
      await axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/person`, headers)
      .then(response => {
      setScreenProfile(response.data.profile);
      });
      setLoading(true);
    } catch(error)  {
      alert("Oh não! Algo deu errado! Reinicie a página por favor!");
      console.log(error);
    };
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
          <HomeContainer>
            <button onClick={() => handleClickSwitch("matchScreen")}>Ir para matches</button>
            <CardContainer>
              {loading ?      
              <div>        
                <p><strong>Nome: </strong>{screenProfile.name}</p>
                <img src={screenProfile.photo} alt={screenProfile.name}/>
                <p><strong>Idade: </strong>{screenProfile.age} Anos</p>
                <p><strong>Bio:</strong><br />{screenProfile.bio}</p>
              </div> : 
              <ReactBootStrap.Spinner animation="border" />
              }
            </CardContainer>
            <ButtonContainer>
              <button className="dislikeButton" onClick={handleDislike}>Não Curti</button>
              <button className="likeButton" onClick={handleLike}>Curti</button>
            </ButtonContainer>
          </HomeContainer>
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
    <AppContainer>
      <h1>AstroMatch</h1>
      {renderPage()}
    </AppContainer>
  );
};

export default App;