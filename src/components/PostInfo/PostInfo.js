import React from 'react';

const PostInfo = ({post}) => {
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

export default PostInfo;