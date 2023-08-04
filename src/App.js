import React from 'react';
import {UseMemo} from "./components/UseMemo/UseMemo";
import {UseCallback} from "./components/UseCallback/UseCallback";
import {UseToggle} from "./components/UseToggle/UseToggle";
import {UseFetch} from "./components/UseFetch/UseFetch/UseFetch";
import {UseArray} from "./components/UseArray/UseArray";

const App = () => {
    return (
        <div>
            {/*<UseMemo/>*/}
            {/*<UseCallback/>*/}
            {/*<UseToggle/>*/}
            {/*<UseFetch/>*/}
            <UseArray/>
        </div>
    );
};

export {App};
