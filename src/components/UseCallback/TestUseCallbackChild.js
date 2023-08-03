import React, {memo} from 'react';

const TestUseCallbackChild = memo(({limitClics}) => {

    const result = limitClics()

    return (
        <div>
<p>{result}</p>
        </div>
    );
});

export {TestUseCallbackChild};