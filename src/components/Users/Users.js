import React, {useEffect, useState} from 'react';
import User from "./User/User";

const Users = ({setUserId}) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((users) => setUsers(users))
            .catch((errors) => console.log(errors.response))
    }, [])

    return (
        <div>
            {users.map((user) => (
                <User key={user.id}
                user={user}
                setUserId={setUserId}/>
            ))}
        </div>
    );
};

export default Users;