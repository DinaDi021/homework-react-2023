import React, {useRef} from 'react';
import {useArray} from "../../hooks/useArray/useArray";

const UseArray = () => {
    const {data, add, remove} = useArray([]);

    const input = useRef();

    const addItem = () => {
        add(input.current.value)
        input.current.value = ''
    }

    return (
        <div>
            <div>
                <input type={"text"} ref={input}/>
                <button onClick={addItem}>add</button>
            </div>
            {data.map((item, index) => (
                <div key={index}>
                    {item}
                    <button onClick={() => remove(index)}>remove</button>
                </div>
            ))}
        </div>
    );
};

export {UseArray};