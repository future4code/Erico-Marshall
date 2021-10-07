import styled from "styled-components";
import MatchScreen from "./components/MatchScreen";

export const AppContainer = styled.div`
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const HomeContainer = styled.div`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 300px;
  }
`

export const ButtonContainer = styled.div`
    display: flex;
  
    button {
        margin: 20px;
        border: none;
        border-radius: 5px;
        width: 80px;
        color: white;
    }

    #likeButton {
      background-color: green;
    }

    #dislikeButton {
      background-color: red;
    }
`

// PÁGINA DOS MATCHES

export const MatchesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
