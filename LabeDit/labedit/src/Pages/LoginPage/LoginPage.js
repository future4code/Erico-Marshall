import React from "react";
import { LoginPageContainer, LogoImage, InputsContainer, SignUpButtonContainer } from "./styled";
import logo from "../../Assets/pintoBoni.png";
import Button from "@material-ui/core/Button"
import LoginForm from "./LoginForm";
import { useHistory } from "react-router";
import { goToSignUp } from "../../Router/coordinator";
import useUnprotectedPage from "../../Hooks/useUnprotectedPage";

const LoginPage = () => {
    useUnprotectedPage();
    const history = useHistory();
  
    return (
        <LoginPageContainer>
            <LogoImage src={logo}/>
            <LoginForm />
            <SignUpButtonContainer>
                <Button
                    onClick={() => goToSignUp(history)}
                    type={"submit"}
                    fullWidth
                    variant={"text"}
                    color={"primary"}
                    margin={"normal"}
                    >
                Crie Aqui sua conta!
            </Button>
            </SignUpButtonContainer>
        </LoginPageContainer>
    )
}

export default LoginPage;