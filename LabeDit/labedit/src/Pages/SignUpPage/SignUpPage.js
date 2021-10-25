import React from "react";
import logo from "../../Assets/pintoBoni.png";
import { SignUpPageContainer, LogoImage } from "./styled";
import SignUpForm from "./SignUpForm";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";

const SignUpPage = () => {
    useUnprotectedPage();

    return (
        <SignUpPageContainer>
            <LogoImage src={logo}/>
            <SignUpForm />
        </SignUpPageContainer>
    )
}

export default SignUpPage;