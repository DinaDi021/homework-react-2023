import React, {useState} from 'react';
import {TestUseMemo} from "./TestUseMemo";

const UseMemo = () => {
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
            <TestUseMemo count={count}/>
        </div>
    );
};

export {UseMemo};