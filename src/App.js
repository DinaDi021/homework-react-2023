import './/App.css';
import { posts } from "./assets/Posts.js";
import postInfo from "./components/PostInfo/PostInfo.js";
import PostComponent from "./components/PostsComponent/PostsComponent.js";
import PostInfo from "./components/PostInfo/PostInfo.js";

const title = 'User list';
const App = () => {

    return (
        <div className={'app'}>
            <h1>{title}</h1>
            {posts.map((post) =>
                <PostInfo key={post.id} post={post}/>
            )}
            <PostComponent />
        </div>
    );
};

export default App;
