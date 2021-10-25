import React from "react";
import logo from "../../Assets/pintoBoni.png";
import { SignUpPageContainer, LogoImage } from "./styled";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";

const SignUpPage = ({setRightButtonText}) => {
    useUnprotectedPage();

    return (
        <SignUpPageContainer>
            <LogoImage src={logo}/>
            <SignUpForm 
            setRightButtonText={setRightButtonText}/>
        </SignUpPageContainer>
    )
}

export default SignUpPage;