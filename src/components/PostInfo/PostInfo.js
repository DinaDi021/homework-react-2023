import styles from './Posts.module.css';
const PostInfo = (props) => {
    const { post } = props;
    return (
        <div className={styles.wrapper}>
            <h2>id: {post.id}</h2>
            <h2>{post.title}</h2>
            <button>More info</button>
        </div>
    )
}

export default PostInfo;