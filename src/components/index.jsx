import React from 'react';
import { Link } from 'react-router';
import { Button, DatePicker } from 'antd';

export default class Index extends React.Component{
    render(){
        return(
            <div>
                <Button id="a">日期选择</Button>
                <DatePicker id="b"/>
                <br/>
                <br/>
                <br/>
                <br/>
                <div><Link to="todo">ToDo Demo</Link></div>
            </div>
        )
    }
}