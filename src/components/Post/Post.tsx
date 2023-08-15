import React, {useState} from 'react';
import PostInfo from "../PostInfo/PostInfo";
import {IProps} from "../interfaces/postInterface";

const Post = ({ post }: IProps) => {

    const [isShow, setISShow] = useState<boolean>(false);
    return (
        <div>
            <h2>ID: {post.id}</h2>
            <h2>Title: {post.title}</h2>
            <button onClick={() => setISShow(prev => !prev)}>{isShow?'Hide':'Show'}</button>
            {isShow&& <PostInfo post={post}/>}
        </div>
    );
};

export default Post;