import React from "react";
import useProtectedPage from "../Hooks/useProtectedPage";

const PostDetail = () => {
    useProtectedPage();
    return (
        <div>
            <h1>Detalhes do Post</h1>
        </div>
    )
}

export default PostDetail;