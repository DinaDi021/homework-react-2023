import React, {useState} from 'react';

import {TestUseCallback} from "./TestUseCallback";

const UseCallback = () => {
    const [count, setCount] = useState(0);
    const handleChangeClick = () => {
        setCount(count + 1)
    };
    console.log('handleChangeClick count1')

    return (
        <div>
            <button onClick={handleChangeClick}>
                {count} clics count
            </button>
            <TestUseCallback count={count}/>
        </div>
    );
};


export {UseCallback};