import React from 'react';
import { Link } from 'react-router';
import { DatePicker, Switch, Slider } from 'antd';
import Page from './page.jsx';
import Demo from '../containers/demo';

export default class Index extends React.Component{
    render(){
        return(
            <Page>
                <Demo/>
                <br/>
                <DatePicker/>
                <br/>
                <Switch/>
                <br/>
                <Slider/>
                <br/>
            </Page>
        )
    }
}
