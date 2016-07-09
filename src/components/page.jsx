import React from 'react';
import {Route, Link} from 'react-router';
import '../style.css';

class Page extends React.Component{
    render(){
        return(
            <div className={'page ' + (this.props.className || '')}>
                {this.props.children}
            </div>
        )
    }
}
export default Page;
