import styles from './Posts.modules.css';

const PostInfo = (props) => {
    return (
        <div className={styles.wrapper}>
            <h2>id: {props.id} - {props.title}</h2>
        </div>
    )
}

export default PostInfo;