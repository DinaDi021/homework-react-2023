import React from 'react';

const UserDetails = ({user}) => {
    const { id, name, username, email, phone, website} = user;
    return (
        <div>
            <h2>{id}, {name}</h2>
            <h2>{username}</h2>
            <p>{email}, {phone}, {website}</p>
        </div>
    );
};

export default UserDetails;