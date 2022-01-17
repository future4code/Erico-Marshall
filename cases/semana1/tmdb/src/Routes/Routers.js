import { Route, Switch } from "react-router-dom";
import Menu from "../Pages/MenuPage/MenuPage";
import Detail from "../Pages/MovieDetail/MovieDetail";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Router = () => {

    return (
        <Switch>
            <Route exact path={"/"}>
                <Menu />
            </Route>
            <Route exact path={"/movie/:id"}>
                <Detail />
            </Route>
            <Route>
                <ErrorPage />
            </Route>
        </Switch>
    )
};

export default Router;
