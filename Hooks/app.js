import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Counter from './Counter';
import Test from './Test';

function Example() {
    return(
        <Router>
            <React.Fragment>
                <Route exact path="/" component={Counter} />
                <Route path="/test" component={Test} />
            </React.Fragment>
        </Router>
    );
}

ReactDOM.render(<Example />, document.getElementById('app'));