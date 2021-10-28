import React, { useState } from "react";
import useProtectedPage from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/urls";
import { PostCardContainer, PostListContainer, PostBarContainer } from "./styled";
import { goToPostDetail } from "../../Routes/coordinator";
import { useHistory } from "react-router";
import CreatePost from "../../Components/CreatePost/CreatePost";
import HandleLikeBar from "../../Components/HandleLike/HandleLike";

const Feed = () => {
    useProtectedPage();
    const history = useHistory();
    const [page, setPage] = useState(1);
    const [size, setSize] = useState(10);

    const posts = useRequestData([], `${BASE_URL}/posts/?page=${page}&size=${size}`);

    const onClickPost = (id, title) => {
        goToPostDetail(history, id, title)
    }

    const postsCards = posts.map((post) => {
        return (
            <PostCardContainer onClick={() => onClickPost(post.id, post.title)} key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <HandleLikeBar 
                postId={post.id}/>
                <PostBarContainer>
                    <p>Pintadas: {post.voteSum}</p>
                    <p>Comentários: {post.commentCount}</p>
                </PostBarContainer>
            </PostCardContainer>
        )
    })

    return (
        <PostListContainer>
            <h1>Escreva algo!</h1>
            <CreatePost />
            <h1>Feed</h1>
            {postsCards}
        </PostListContainer>
    )
}

export default Feed;