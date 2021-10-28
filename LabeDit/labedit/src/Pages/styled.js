import styled from "styled-components";

export const CommentListContainer = styled.div`
    font-family: "Roboto";
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
    padding: 20px;
    border-radius: 5px;
    margin: 20px auto 20px auto;
    width: 50vw;
    height: fit-content;

    h2 {
        box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
        width: 100%;
    }
`

export const CommentCardContainer = styled.div`
    box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
    width: 50vw;
    margin-right: 20px;
    margin-left: 20px;

    p {
        margin-bottom: 2px;
    }
`

export const TittleContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`