import React, {useEffect, useState} from 'react';
import styles from './Posts.module.css'
import Post from "./Post/Post";

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((posts) => setPosts(posts))
            .catch((errors) => console.log(errors.response))

    }, [])

    return (
        <div className={styles.container}>
            {posts.map((post) => (<Post
                    key={post.id}
                    post={post}/>
            ))}
        </div>
    );
};

export default Posts;