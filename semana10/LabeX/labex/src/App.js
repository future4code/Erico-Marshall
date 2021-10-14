import './App.css';
import HomePage from './Pages/HomePage';
import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage';
import AdminHome from './Pages/AdminHome';
import ListTrips from "./Pages/ListTripsPage";
import CreateTrip from "./Pages/CreateTripPage";
import AplicationForm from "./Pages/AplicationFormPage";
import TripDetail from "./Pages/TripDetailsPage";
import LoginPage from "./Pages/LoginPage";

const App = () => {

  return (
      <BrowserRouter>
      <Switch> 
      <Route exact path={"/"}>
        <HomePage />
      </Route>
      <Route exact path={"/login"}>
          <LoginPage />
      </Route>
      <Route exact path={"/admin"}>
          <AdminHome />
      </Route>
      <Route exact path={"/trips"}>
          <ListTrips />
      </Route>
      <Route exact path={"/admin/create"}>
          <CreateTrip />
      </Route>
      <Route exact path={"/trips/aplication"}>
          <AplicationForm />
      </Route>
      <Route exact path={"/admin/trip/:id"}>
          <TripDetail />
      </Route>
      <Route>
        <ErrorPage />
      </Route>
      </Switch>
      </BrowserRouter>
  );
}

export default App;