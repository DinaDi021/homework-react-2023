import React from 'react';
import {useToggle} from '../../hooks/useToggle/useToggle'
import style from './UseToggle.module.css'

const UseToggle = () => {
    const {value, change} = useToggle(true)

    return (
        <div className={[style.wrapper, value ? style.light : style.dark].join(' ')}>
        Test
            <button onClick={change}>{value ? 'dark' : 'light'}</button>
        </div>
    );
};

export {UseToggle};