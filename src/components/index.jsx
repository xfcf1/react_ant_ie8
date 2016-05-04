import React from 'react';
import { Link } from 'react-router';
import { DatePicker, Switch, Slider } from 'antd';
export default class Index extends React.Component{
    render(){
        return(
            <div>这个是首页
                <br/>
                <DatePicker/>
                <br/>
                <Switch/>
                <br/>
                <Slider/>
                <br/>
                <div><Link to="todo">ToDo Demo</Link></div>
            </div>
        )
    }
}