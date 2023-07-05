import './/App.css';
import { posts } from "./assets/Posts.js";
import PostComponent from "./components/PostsComponent/PostsComponent.js";
import PostInfo from "./components/PostInfo/PostInfo.js";

const title = 'Posts:';
const App = () => {

    return (
        <div className={'app'}>
            <h1>{title}</h1>
            <PostComponent />
        </div>
    );
};

export default App;
