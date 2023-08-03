import React, {useMemo, useState} from 'react';

const TestUseMemo = ({ count }) => {
    const [count2, setCount2] = useState(0);
    const limitClics = (count) => {
        console.log('Calc');
        let result = 0;
        for (let i = 0; i < 1000000000; i++) {
            result += count;
        }
        return result;
    };

    const memoResult = useMemo(() => limitClics(count), [count]);

    const handleChangeClick = () => {
        setCount2(count2 + 1)
    };
    console.log('handleChangeClick count2')

    return (
        <div>
            <p>{memoResult}</p>
            <button onClick={handleChangeClick}>{count2} clics count(2)</button>
        </div>
    );
};

export { TestUseMemo };
