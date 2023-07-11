import React from 'react';

const UserAddress = ({user}) => {
    const { street, suite, city} = user.address;
    return (
        <div>
            <h3>Address:</h3>
            <h4>{street}, {suite}, {city}</h4>
        </div>
    );
};

export default UserAddress;