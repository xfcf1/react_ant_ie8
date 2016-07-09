require('core-js/es6/object');
import React from 'react';
import ReactDom from 'react-dom';
import Router from 'react-router';
import routes from 'routes';
import createHashHistory from 'history/lib/createHashHistory';
let history = createHashHistory({queryKey: false});

ReactDom.render(<Router history={history}>{routes}</Router>, document.getElementById('content'));
