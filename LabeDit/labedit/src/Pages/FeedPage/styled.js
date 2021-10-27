import styled from "styled-components";

export const PostListContainer = styled.div`
    font-family: "Roboto";
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PostCardContainer = styled.div`
    padding: 20px;
    box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
    border-radius: 5px;
    margin-bottom: 20px;
    width: 50vw;
    height: fit-content;
    max-height: 400px;
    cursor: pointer;
`

export const PostBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    color: #76647A;
`