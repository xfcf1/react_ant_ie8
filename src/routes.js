import React from 'react';
import {Route, IndexRoute} from 'react-router';

const Main = (nextState, cb) => {
    require.ensure([], (require) => {
        cb(null, require('components/index.jsx'))
    })
}
const Error = (nextState, cb) => {
    require.ensure([], (require) => {
        cb(null, require('components/error.jsx'))
    })
}
const Index = (nextState, cb) => {
    require.ensure([], (require) => {
        cb(null, require('components/index.jsx'))
    })
}

const routes = (
    <Route path="/" getComponent={Main}>
        <IndexRoute getComponent={Index}/>
        <Route path="/index" getComponent={Index}/>
        <Route path="*" getComponent={Error}/>
    </Route>
)

export default routes;
