import styled from "styled-components";

export const LikeContainer = styled.div`
    display: flex;
    width: 40%;

    button {
        margin-right: 20px;
        background-color: white;
        border: none;
        box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    }

    button:hover {
        background-color: whitesmoke;
        cursor: pointer;
    }

    img {
        width: 25px;;
    }
`