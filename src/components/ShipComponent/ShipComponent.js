const shipComponent = (props) => {
    const { ship, handleСlick } = props;
    return (
        <div className={styles.wrapper}>
            <h2>mission name: {post.id}</h2>
            <h2>launch_year: {post.title}</h2>
            <h2>mission_patch_small: {post.title}</h2>
            <button onClick={()=>handleСlick(post)}>More info</button>
        </div>
    )
}

export default shipComponent();