import PostInfo from "../PostInfo/PostInfo.js";
import {posts} from "../../assets/Posts.js";

const PostsComponent = () => {
    const one = 'one';
    return (
        <>
            {posts.map((post) =>
                <PostInfo key={post.id} post={post}/>
            )}
        </>
    )
}

export default PostsComponent;