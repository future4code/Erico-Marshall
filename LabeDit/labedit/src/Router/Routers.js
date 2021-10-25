import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "../Pages/LoginPage";
import SignUp from "../Pages/SignUpPage";
import Feed from "../Pages/FeedPage";
import Post from "../Pages/PostDetailPage";
import ErrorPage from "../Pages/ErrorPage";
import Header from "../Components/Header/Header";

const Router = () => {

    return (
        <BrowserRouter>
            <Header />
            <Switch>
                <Route exact path={"/login"}>
                    <Login />
                </Route>
                <Route exact path={"/cadastro"}>
                    <SignUp />
                </Route>
                <Route exact path={"/"}>
                    <Feed />
                </Route>
                <Route exact path={"/post/:id"}>
                    <Post />
                </Route>
                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
};

export default Router;