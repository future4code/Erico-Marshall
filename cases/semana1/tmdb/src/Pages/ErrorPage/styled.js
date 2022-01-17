import styled from 'styled-components';

export const ErrorPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';

    button {
        min-width: 100px;
        max-width: 200px;
        min-height: 30px;
        max-height: max-content;
        padding: 10px;
        border-radius: 5px;
        border: none;
        margin: 0 30px;
        margin-bottom: 10px;
        font-size: 18px;
        font-weight: bold;
        background-color: #385561;
        color: white;
        opacity: 0.8;
    }
    button:hover {
        opacity: 1;
        cursor: pointer;
    }

`