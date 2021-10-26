import React from "react";


const PostCard = () => {

    const posts = useRequestData([], `${BASE_URL}/posts/?page=${page}&size=${size}`);


};
