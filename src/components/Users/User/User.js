import React, {useState} from 'react';
import UsersPosts from "../UsersPosts";

const User = ({user, setUserId}) => {
    const {id, name} = user;

    return (
        <div>
            <h2>{id}</h2>
            <h2>{name}</h2>
            <button onClick={()=> setUserId(id)}>Users post</button>
        </div>
    );
};

export default User;