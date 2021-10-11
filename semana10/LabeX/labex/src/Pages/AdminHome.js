//Para o administrador ver a lista de viagens e poder deletá-las ou acessar o detalhe de cada uma delas

import React, { useState } from "react";
import styled from "styled-components";
import HomePage from "./HomePage";
import CreateTrip from "./CreateTripPage";
import LoginPage from "./LoginPage";

const AdminHome = () => {

    const [currentPage, setCurrentPage] = useState("admin");

    const handleClickSwitch = (page) => {
        setCurrentPage(page);
    }

    const renderPage = () => {
        switch (currentPage) {
            case "admin":
                return (
                    <div>
                        <h1>Painel Administrativo</h1>
                        <div>
                            <button onClick={handleClickSwitch("start")}>Voltar</button>
                            <button onClick={handleClickSwitch("createTrip")}>Criar Viagem</button>
                            <button onClick={handleClickSwitch("logout")}>Logout</button>
                        </div>
                        <h2>Lista Viagens</h2>
                    </div>
                )
            case "back":
                return <HomePage />;
            case "createTrip":
                return <CreateTrip />;
            case "logout": 
                return <LoginPage 
                />;
        }
    }
}