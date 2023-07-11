import Users from "./components/Users/Users";
import UsersPosts from "./components/Users/UsersPosts";
import {useState} from "react";



const App = () => {
    const [userId, setUserId] = useState(null);

    return (
        <div>
            <Users setUserId={setUserId}/>
            {userId&& <UsersPosts userId={userId}/>}
        </div>
    );
};


export {App};
