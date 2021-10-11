//Para o usuário escolher entre Área Administrativa e Lista de Viagens

import React, { useState } from "react";
import AdminHome from "./AdminHome";
import ListTrips from "./ListTripsPage";
import Aplication from "./AplicationFromPage";
import LoginPage from "./LoginPage";

const HomePage = () => {

    const [currentPage, setCurrentPage] = useState("start");
    const [login, setLogin] = useState(false);

    const handleClickSwitch = (page) => {
        setCurrentPage(page);
    }

    const renderPage = () => {
        switch (currentPage) {
            case "start":
                return (
                    <div>
                        <button onClick={handleClickSwitch("listTrips")}>Ver Viagens</button>
                        <button onClick={handleClickSwitch("admin")}>Área de Admin</button>
                    </div>
                )
            case "admin":
                if (login = false) {
                    return <LoginPage 
                    setLogin={setLogin}/>
                } else {
                    return <AdminHome />
                }
            case "listTrips":
                return <ListTrips />
            default:
                return (
                    <h1>Oops! Algo de errado aconteceu! Recarregue a página por favor!</h1>
                )
        }   
    }
    
    return (
        <div>
            <h1>LabeX</h1>
            {renderPage()}
        </div>
    )
}

export default HomePage;