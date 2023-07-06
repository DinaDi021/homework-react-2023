import PostInfo from "../PostInfo/PostInfo.js";
import {useEffect, useState} from "react";



export const PostsComponent = () => {

    const [posts, setPosts] = useState([])
    const [selectedPost, setSelectedPost] = useState('');

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then((posts) => {
                setPosts(posts);
            })
            .catch((errors) => console.log(errors.response))
    }, [])
    console.log(posts)

    const handlePostClick = (post) => {
        setSelectedPost(post);
    };

    return (
        <>
            {selectedPost ? (
                <div>
                    <h2>Post Details</h2>
                    <h3>ID: {selectedPost.id}</h3>
                    <h3>Title: {selectedPost.title}</h3>
                    <p>Body: {selectedPost.body}</p>
                </div>
            ) : (
                posts.map((post) => (
                    <PostInfo
                        key={post.id}
                        post={post}
                        handleСlick={handlePostClick}
                    />
                ))
            )}
        </>
    );
};
export default PostsComponent;