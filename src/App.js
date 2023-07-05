import './/App.css';
import PostInfo from './PostInfo';
import {posts} from './components/posts/Posts.js'

const title = 'User list';
const App = () => {

  return (
      <div className={'app'}>
        <h1>{title}</h1>
        {posts.map((post) =>
            <PostInfo key={post.id} post={post}/>)}
      </div>
  );
};

export default App;

