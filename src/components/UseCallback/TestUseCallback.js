import React, {useCallback, useState} from 'react';
import {TestUseCallbackChild} from "./TestUseCallbackChild";

const TestUseCallback = ({count}) => {
    const [count2, setCount2] = useState(0);

    const limitClics = useCallback ( () => {
        console.log('Calc');
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += count;
        }
        return result;
    }, [count]);

    const handleChangeClick = () => {
        setCount2(count2 + 1)
    };
    console.log('handleChangeClick count2')

    return (
        <div>
            <TestUseCallbackChild limitClics={limitClics}/>
            <button onClick={handleChangeClick}>{count2} clics count(2)</button>
        </div>
    );
};

export {TestUseCallback};