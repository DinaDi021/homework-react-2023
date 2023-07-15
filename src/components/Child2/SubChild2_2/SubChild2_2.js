import React, { useContext} from 'react';
import {SubChildContext} from '../../../App'

const SubChild22 = () => {
    const { text, setText } = useContext(SubChildContext);

    const updateText = () => {
        setText("New text");
    };

    return (
        <div>
            <h2>{text}, SubChild2_2</h2>
            <button onClick={updateText}>New text</button>
        </div>
    );
};

export default SubChild22;