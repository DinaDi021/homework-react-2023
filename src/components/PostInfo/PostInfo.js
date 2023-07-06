import styles from './Posts.module.css';
const PostInfo = (props) => {
    const { post, handleСlick } = props;
    return (
        <div className={styles.wrapper}>
            <h2>id: {post.id}</h2>
            <h2>{post.title}</h2>
            {handleСlick && (
                <button onClick={() => handleСlick(post)}>More info</button>
            )}
        </div>
    )
}

export default PostInfo;