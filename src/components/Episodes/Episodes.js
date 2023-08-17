import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useSearchParams} from "react-router-dom";

import {episodesActions} from "../../redux/slices/episodesSlice/episodesSlice";
import {Episode} from "./Episode/Episode";
import styles from './Episodes.module.css'


const Episodes = () => {
    const dispatch = useDispatch();
    const {episodes} = useSelector(store => store.episodes)
    console.log(episodes)
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(episodesActions.getEpisodes(query.get('page')));
    }, [query, dispatch]);

    return (
        <div className={styles.Episodes}>
            {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
        </div>
    );
};

export {Episodes};