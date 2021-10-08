import styled from "styled-components";


export const AppContainer = styled.div`
  background-color: #a9a9a9;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
`

export const HomeContainer = styled.div`
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  display: flex;
  flex-direction: column;
  align-items: center;

  button {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    opacity: 0.8;
    margin: 20px;
    border: none;
    border-radius: 5px;
    width: 180px;
    color: white;
    background-color: darkgray;
  }

  button:hover {
    opacity: 1;
  }
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;

  p {
    padding: 10px;
    flex-wrap: wrap;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    height: 300px;
    border-radius: 10px;
  }
`

export const ButtonContainer = styled.div`
    display: flex;
  
    button {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
        opacity: 0.8;
        margin: 20px;
        border: none;
        border-radius: 5px;
        width: 80px;
        color: white;
    }

    .likeButton {
      background-color: green;
    }

    .dislikeButton {
      background-color: red;
    }

    button:hover {
      opacity: 1.0;
    }

    button:active {
      color: lightgray;
    }
`

// PÁGINA DOS MATCHES

export const MatchesContainer = styled.div`
  border-radius: 10px;
  background-color: white;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    align-self: flex-start;
  }

  button {
    opacity: 0.8;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    opacity: 0.8;
    margin: 20px;
    border: none;
    border-radius: 5px;
    width: 180px;
    color: white;
    background-color: darkgray;
  }

  button:hover{
    opacity: 1;
  }
`
export const MatchRow = styled.div`
  display: flex;
  width: 400px;
  justify-content: center;

  img {
    box-shadow: rgba(0, 0, 0, 0.05) 0px 1px 2px 0px;
    border: 2px solid white;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    margin-right: 5px;
  }
`
