import React, { useState } from "react";
import useProtectedPage from "../Hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../Hooks/useRequestData";
import { BASE_URL } from "../Constants/urls";
import { CommentCardContainer, CommentListContainer, TittleContainer } from "./styled";

const PostDetail = () => {
    useProtectedPage();
    const params = useParams();

    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const posts = useRequestData([], `${BASE_URL}/posts/?page=${page}&size=${size}`);
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`);

    const postTittle = posts.map((post) => {
        if (post.id === params.id) {
            return (
                    <TittleContainer key={post.id}>
                        <h1>{post.title}</h1>
                        <h3>{post.body}</h3>
                    </TittleContainer>
            )
        }
    })

    const postComments = comments.map((comment) => {
        return (
        <CommentCardContainer key={comment.id}>
            <p>{comment.body}</p>
        </CommentCardContainer>
        )
    })

    return (
        <CommentListContainer>
            {postTittle}
            {postComments}
        </CommentListContainer>
    )
}

export default PostDetail;