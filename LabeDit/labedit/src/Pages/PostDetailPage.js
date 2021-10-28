import React, { useState } from "react";
import useProtectedPage from "../Hooks/useProtectedPage";
import { useParams } from "react-router-dom";
import useRequestData from "../Hooks/useRequestData";
import { BASE_URL } from "../Constants/urls";
import { CommentCardContainer, CommentListContainer, TittleContainer } from "./styled";
import CreateComment from "../Components/CreateComment/CreateComment";
import HandleLikeBar from "../Components/HandleLike/HandleLike";
import axios from "axios";
import { LikeContainer } from "../Components/HandleLike/styled";
import likeIcon from "../Assets/likeIcon.png";
import dislikeIcon from "../Assets/dislikeIcon.png";


const PostDetail = () => {
    useProtectedPage();
    const params = useParams();

    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);
    const posts = useRequestData([], `${BASE_URL}/posts/?page=${page}&size=${size}`);
    const comments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`);

    const header = {
        headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
        },
    };

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

    const handleLikeComment = (commentId) => {
        const body = {
            direction: 1,
        }
        axios
        .post(`${BASE_URL}/comments/${commentId}/votes`, body, header)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.message);
        });
    }

    const handleDislikeComment = (commentId) => {
        const body = {
            direction: -1,
        }
        axios
        .post(`${BASE_URL}/comments/${commentId}/votes`, body, header)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.message);
        });
    }

    const postComments = comments.map((comment) => {
        return (
        <CommentCardContainer key={comment.id}>
            <p>💬 {comment.body}</p>
            <p>Pintadas: {comment.voteSum}</p>
            <LikeContainer>
            <button onClick={() => handleLikeComment(comment.id)}><img src={likeIcon} alt="like icon"></img></button>
            <button onClick={() => handleDislikeComment(comment.id)}><img src={dislikeIcon} alt="dislike icon"></img></button>
            </LikeContainer>
        </CommentCardContainer>
        )
    })

    return (
        <CommentListContainer>
            {postTittle}
            <CreateComment 
            postId={params.id}/>
            <HandleLikeBar 
            postId={params.id}/>
            <h2>Comentários:</h2>
            {postComments}
        </CommentListContainer>
    )
}

export default PostDetail;