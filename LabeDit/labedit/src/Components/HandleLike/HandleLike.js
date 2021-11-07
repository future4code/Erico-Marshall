import axios from "axios";
import { BASE_URL } from "../../Constants/urls";
import { LikeContainer } from "./styled";
import likeIcon from "../../Assets/likeIcon.png";
import dislikeIcon from "../../Assets/dislikeIcon.png";
import dismissLike from "../../Assets/dismissLike.png";
import { useEffect } from "react";

const HandleLikeBar = ({postId}) => {
    const refreshPage = () => {
        window.location.reload()
    };

    const header = {
        headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
        },
    };

    const handleLikeButton = (postId, like) => {
        const body = {
            direction: like,
        }
        axios
        .post(`${BASE_URL}/posts/${postId}/votes`, body, header)
        .then((response) => {
            console.log(response);
            refreshPage();
        })
        .catch((error) => {
            console.log(error.message);
        });
    };

    const handleDismissLikeButton = (postId) => {
        axios
        .delete(`${BASE_URL}/posts/${postId}/votes`, header)
        .then((response) => {
            console.log(response);
            refreshPage();
        })
        .catch((error) => {
            console.log(error.message);
        });
    };

    return (
        <LikeContainer>
            <button onClick={() => handleLikeButton(postId, 1)}><img src={likeIcon} alt="like icon"></img></button>
            <button onClick={() => handleDismissLikeButton(postId)}><img src={dismissLike} alt="dismiss like icon"></img></button>
            <button onClick={() => handleLikeButton(postId, -1)}><img src={dislikeIcon} alt="dislike icon"></img></button>
        </LikeContainer>
    );
};

export default HandleLikeBar;