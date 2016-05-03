import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducer from '../reducers/reducers';
let thunkStore = applyMiddleware(thunk)(createStore);
let store = thunkStore(reducer);

export default class Main extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <ReactCSSTransitionGroup
                    component="div"
                    transitionName="page"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}
                    style={{height: '100%'}}
                >
                    {React.cloneElement(this.props.children, {
                        key: this.props.location.pathname
                    })}
                </ReactCSSTransitionGroup>
            </Provider>
        )
    }
}