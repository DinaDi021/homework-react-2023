import React from 'react';
import UserDetails from "./UserInfo/UserDetails";
import UserAddress from "./UserInfo/UserAddress";
import Company from "./UserInfo/Company";

const User = ({user}) => {
    return (
        <div>
            <UserDetails user={user}/>
            <UserAddress user={user}/>
            <Company user={user}/>
        </div>
    );
};

export default User;