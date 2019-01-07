import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Counter from './Counter';
import { MouseTracker } from './MouseTracker';
import { MouseTrackerHooks } from './MouseTrackerHooks';

function Example() {
    return(
        <Router>
            <React.Fragment>
                <Route exact path="/" component={Counter} />
                <Route path="/renderProp" component={MouseTracker} />
                <Route path="/hooks" component={MouseTrackerHooks} />
            </React.Fragment>
        </Router>
    );
}

ReactDOM.render(<Example />, document.getElementById('app'));