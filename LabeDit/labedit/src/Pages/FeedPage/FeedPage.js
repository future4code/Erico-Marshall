import React, { useState } from "react";
import useProtectedPage from "../../Hooks/useProtectedPage";
import useRequestData from "../../Hooks/useRequestData";
import { BASE_URL } from "../../Constants/urls";
import { PostCardContainer, PostListContainer, PostBarContainer, PageSelectContainer } from "./styled";
import { goToPostDetail } from "../../Routes/coordinator";
import { useHistory } from "react-router";
import CreatePost from "../../Components/CreatePost/CreatePost";
import HandleLikeBar from "../../Components/HandleLike/HandleLike";

const Feed = () => {
    useProtectedPage();

    const history = useHistory();
    const [page, setPage] = useState(1);

    const posts = useRequestData([], `${BASE_URL}/posts/?page=${page}&size=10`);

    const onClickPost = (id, title) => {
        goToPostDetail(history, id, title)
    }

    const onClickNextPage = () => {
        setPage(page + 1);
    }

    const onClickPreviousPage = () => {
        if (page > 1) {
            setPage(page - 1);
        }
    }

    const postsCards = posts.map((post) => {
        return (
            <PostCardContainer key={post.id}>
                <h2  onClick={() => onClickPost(post.id)} >{post.title}</h2>
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
            <PageSelectContainer>
                <button onClick={onClickPreviousPage}>Página Anterior</button>
                <button onClick={onClickNextPage}>Próxima Página</button>
            </PageSelectContainer>
            {postsCards}
            <PageSelectContainer>
                <button onClick={onClickPreviousPage}>Página Anterior</button>
                <button onClick={onClickNextPage}>Próxima Página</button>
            </PageSelectContainer>
        </PostListContainer>
    )
}

export default Feed;