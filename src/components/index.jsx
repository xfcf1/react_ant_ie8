import React from 'react';
import { Link } from 'react-router';
import { DatePicker } from 'antd';
export default class Index extends React.Component{
    render(){
        return(
            <div>这个是首页
                <DatePicker/>
                <div><Link to="todo">ToDo Demo</Link></div>
            </div>
        )
    }
}