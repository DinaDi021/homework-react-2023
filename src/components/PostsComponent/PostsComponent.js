import PostInfo from "../PostInfo/PostInfo.js";
import {posts} from "../../assets/Posts.js";
import {useState} from "react";


const PostsComponent = () => {

    const [infoText, setInfoText] = useState('');
    const handleСlick = (post) => {
        alert(`        userId - ${post.userId}, Id - ${post.id}, 
        Title:${post.title}, 
        Body:${post.body}`);
    }
    return (
        <>
            {posts.map((post) =>
                <PostInfo key={post.id}
                          post={post}
                          handleСlick={handleСlick}
                          infoText={infoText}
                />
            )}
        </>
    )
}

export default PostsComponent;