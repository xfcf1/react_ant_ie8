import React from 'react';
import {Route, IndexRoute} from 'react-router';

import Main from 'components/main.jsx';
import Error from 'components/error.jsx';
import Index from 'components/index.jsx';
import Todo from 'components/todo.jsx';

const routes = (
    <Route path="/" component={Main}>
        <IndexRoute component={Index}></IndexRoute>
        <Route path="/index" component={Index}></Route>
        <Route path="/todo" component={Todo}></Route>
        <Route path="*" component={Error}></Route>
    </Route>
)
export default routes;