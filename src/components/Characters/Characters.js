import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {charactersActions} from "../../redux";
import {Character} from "./Character/Character";
import {useLocation} from "react-router";

const Characters = () => {
    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters)
    const {state: {ids}} = useLocation();
    console.log(ids)
    console.log('characters useSelector:', characters)

    useEffect(() => {
        console.log('Effect ids:', ids);
        dispatch(charactersActions.getCharactersById({ids}))
    }, [ids, dispatch])

    return (
        <div>
            {characters.map(character => <Character key={character.id} character={character}/> )}
        </div>
    );
};

export {Characters};