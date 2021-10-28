import { useHistory } from "react-router";
import axios from "axios";
import { BASE_URL } from "../../Constants/urls";
import { LikeContainer } from "./styled";
import likeIcon from "../../Assets/likeIcon.png";
import dislikeIcon from "../../Assets/dislikeIcon.png";

const HandleLikeBar = ({postId}) => {
    const history = useHistory();
    const header = {
        headers: {
            Authorization: localStorage.getItem("token"),
            "Content-Type": "application/json",
        },
    };

    const handleLikeButton = (postId) => {
        const body = {
            direction: 1,
        }
        axios
        .post(`${BASE_URL}/posts/${postId}/votes`, body, header)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.message);
        });
    };

    const handleDislikeButton = (postId) => {
        const body = {
            direction: -1,
        }
        axios
        .post(`${BASE_URL}/posts/${postId}/votes`, body, header)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error.message);
        })
    }

    return (
        <LikeContainer>
            <button onClick={() => handleLikeButton(postId)}><img src={likeIcon}></img></button>
            <button onClick={() => handleDislikeButton(postId)}><img src={dislikeIcon}></img></button>
        </LikeContainer>
    );
};

export default HandleLikeBar;