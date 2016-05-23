import React from 'react';
import ReactDom from 'react-dom';
import Router from 'react-router';
import routes from 'routes';
import createHashHistory from 'history/lib/createHashHistory';
let history = createHashHistory({queryKey: false});

import 'antd/style/index.less';

ReactDom.render(<Router history={history}>{routes}</Router>, document.getElementById('content'));
