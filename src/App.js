import React from 'react';
import {UseMemo} from "./components/UseMemo/UseMemo";
import {UseCallback} from "./components/UseCallback/UseCallback";

const App = () => {
    return (
        <div>
            {/*<UseMemo/>*/}
            <UseCallback/>
        </div>
    );
};

export {App};
