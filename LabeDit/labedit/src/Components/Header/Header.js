import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { StyledToolbar, LogoImage } from './styled';
import Button from '@material-ui/core/Button';
import { goToFeed, goToLogin } from "../../Routes/coordinator"
import { useHistory } from 'react-router-dom';
import logo from "../../Assets/pintoBoni.png"


const Header = ({rightButtonText, setRightButtonText}) => {
    const token = localStorage.getItem("token");
    const history = useHistory();

    const logout = () => {
        localStorage.removeItem("token");
    }

    const rightButtonAction = () => {
        if (token) {
            logout();
            setRightButtonText("Login");
            goToLogin(history);
        } else {
            goToLogin(history);
        }
    }

    return (
        <AppBar position="static">
            <StyledToolbar>
                <Button onClick={() => goToFeed(history)} color="inherit"><LogoImage src={logo} />BoniDit</Button>
                <Button onClick={rightButtonAction} color="inherit">{rightButtonText}</Button>
            </StyledToolbar>
        </AppBar>
    );
}

export default Header;