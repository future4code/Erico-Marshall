import { useHistory } from "react-router";
import { useLayoutEffect } from "react";
import { goToFeed } from "../Routes/coordinator";

const useUnprotectedPage = () => {
    const history = useHistory();
    useLayoutEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            goToFeed(history);
        }
    }, [history])
};

export default useUnprotectedPage;