import React from 'react';
import Posts from "./components/ClassComponents/Posts/Posts";
import Comments from "./components/ClassComponents/Comments/Comments";
import styles from './app.module.css';
import Cars from "./components/ClassComponents/Cars/Cars";

const App = () => {
    return (
        <div className={styles.wrapper}>
            {/*<Posts/>*/}
            {/*<Comments/>*/}
            <Cars/>
        </div>
    );
};

export {App};
