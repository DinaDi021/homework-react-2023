import React from 'react';
import {IProps} from "../interfaces/postInterface";

const PostInfo = ({post}: IProps) => {
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