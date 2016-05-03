import React from 'react';
import {Route, Link} from 'react-router';
import TodoCont from '../containers/todo'

export default class Todo extends React.Component{
    render(){
        return(
            <div>
                <TodoCont/>
            </div>
        )
    }
}