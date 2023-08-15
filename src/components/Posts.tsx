import React, {useEffect, useState} from 'react';

import styles from './Posts.module.css'
import Post from "./Post/Post";
import {IPost} from "./interfaces/postInterface";
import {postService} from "./services/postServices";


const Posts = () => {
    const [posts, setPosts] = useState<IPost[] | null>(null);


    useEffect(() => {
        postService.getAll()
            .then(response => setPosts(response.data))
    }, [])

    return (
        <div className={styles.container}>
            {posts?.map((post: IPost) => (<Post
                    key={post.id}
                    post={post}/>
            ))}
        </div>
    );
};

export default Posts;