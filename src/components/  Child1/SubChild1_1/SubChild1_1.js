import {useContext} from "react";
import {SubChildContext} from '../../../App'

const SubChild11 = () => {

    const {text} = useContext(SubChildContext);

    return (
        <div>
            <h2>{text}SubChild1_1</h2>
        </div>
    );
};

export default SubChild11;