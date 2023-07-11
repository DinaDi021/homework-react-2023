import React from 'react';

const Company = ({user}) => {
    const {name ,catchPhrase, bs} = user.company;
    return (
        <div>
            <h3>Company</h3>
            <h4>{name}</h4>
            <p>{catchPhrase}, {bs}</p>
        </div>
    );
};

export default Company;