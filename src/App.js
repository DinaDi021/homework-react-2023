import Child1 from "./components/  Child1/Child1";
import Child2 from "./components/Child2/Child2";
import {createContext, useState} from "react";

export const SubChildContext = createContext(null)
const App = () => {
    const [text, setText] = useState('');

    return (
        <SubChildContext.Provider value={{text: text, setText: setText}}>
        <div>
            <Child1/>
            <Child2/>
        </div>
        </SubChildContext.Provider>
    );
};

export {App};
