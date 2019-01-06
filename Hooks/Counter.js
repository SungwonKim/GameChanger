import React, { useState } from "react";
import Dummy from './Dummy';
import { Link } from "react-router-dom";

export default function Counter() {
    // Declare a new state variable, which we'll call "count"
    const [count, setCount] = useState(0);
    const [num, setNum] = useState(0);

    return(
        <React.Fragment>
            <div>
                <p>A is clicked {count} times</p>
                <button onClick={() => setCount(count + 1)}>
                    Click A
                </button>
            </div>
            <div>
                <p>B is clicked {num} times</p>
                <button onClick={() => setNum(num + 1)}>
                    Click B
                </button>
            </div>
            <div style={{ marginTop: '20px' }}>
                <Dummy title={`${num}-${count}`} />
            </div>
            <Link to={'/test'} >Go test page</Link>
        </React.Fragment>
    );
}