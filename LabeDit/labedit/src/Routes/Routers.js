import { Route, Switch } from "react-router-dom";
import Login from "../Pages/LoginPage/LoginPage";
import SignUp from "../Pages/SignUpPage/SignUpPage";
import Feed from "../Pages/FeedPage/FeedPage";
import Post from "../Pages/PostDetailPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const Router = ({setRightButtonText}) => {

    return (
        <Switch>
            <Route exact path={"/login"}>
                <Login 
                setRightButtonText={setRightButtonText}/>
            </Route>
            <Route exact path={"/cadastro"}>
                <SignUp 
                setRightButtonText={setRightButtonText}/>
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
    )
};

export default Router;