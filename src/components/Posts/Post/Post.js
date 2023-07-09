import React from 'react';

const Post = ({post}) => {
    const {id, title, userId, body} = post;
    return (
        <div>
            <p>Id: {id}</p>
            <p>UserId: {userId}</p>
            <p>Title: {title}</p>
            <p>Body: {body}</p>
        </div>
    );
};

export default Post;