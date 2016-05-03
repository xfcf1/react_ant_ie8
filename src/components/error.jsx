import React from 'react';
import {Route, Link} from 'react-router';

export default class Error extends React.Component{
    render(){
        return(
            <h1>Error<br/><Link to="/">to index</Link></h1>
        )
    }
}