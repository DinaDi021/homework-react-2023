import React, {useEffect, useState} from 'react';

const UsersPosts = ({userId}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`)
            .then(response => response.json())
            .then((posts) => setPosts(posts))
            .catch((errors) => console.log(errors.response))
    }, [userId])

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <p>Id: {post.id}</p>
                    <p>UserId: {post.userId}</p>
                    <p>Title: {post.title}</p>
                    <p>Body: {post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default UsersPosts;