import React from 'react';
import {useFetch} from "../../../hooks/useFetch/useFetch";

const UseFetch = () => {
    const users = useFetch('/users');
    const posts = useFetch('/posts')
    const comments = useFetch('/comments')

    return (
        <div>
                {users.map((user) => (
                    <div key={user.id}>
                        <h2>{user.name}</h2>
                    </div>
                ))}
            {posts.map((post) => (
                <div key={post.id}>
                    <h4>{post.title}</h4>
                </div>
            ))}
            {comments.map((comment) => (
                <div key={comment.id}>
                    {comment.email}
                </div>
            ))}
        </div>
    );
};

export {UseFetch};