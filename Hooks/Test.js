import React, { useState } from "react";
import Dummy from './Dummy';

export default function Counter() {
    const [ testCount, setTestCount ] = useState(0)
    return(
        <div>
            Hi { testCount }
            <span onClick={() => { setTestCount(testCount + 1)}}> Click </span>

            <div>
                <Dummy title={testCount}></Dummy>
            </div>
        </div>
    );
}