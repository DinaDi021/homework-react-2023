import React, {useState} from 'react';

import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

const App = () => {

    const [userId, setUserId] = useState(null);

  return (
      <div>
        <Users setUserId={setUserId}/>
          {userId&& <Posts userId={userId}/>}
      </div>
  );
};

export {App};
