import React, { Component } from 'react';
import {Button} from 'antd'
import 'antd/lib/button/style/css';

/* class SingleTodo extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            
        );
    }
} */

const SingleTodo = props => {
    return (
        <li>{props.todo}<Button type="default" onClick={props.delete}> Remove </Button></li>
        
    );
}
export default SingleTodo;