import React, { Component } from 'react';
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import {Button, Input, Icon, Row, Col} from 'antd';
import SingleTodo from './SingleTodo';

import 'antd/dist/antd.css';
import './index.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [],
      currentTodo: "",
      userName: '',
    }
  }
  emitEmpty = () => {
    this.userNameInput.focus();
    this.setState({ userName: '' });
  }
  onChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  }
  onInputChange = e => {
    this.setState({ currentTodo: e.target.value})
  }
  onClick = () => {
    let todosCopy = this.state.todos.slice();
    todosCopy.push(this.state.currentTodo);

    this.setState({ todos: todosCopy, currentTodo: ""})

  }
  deleteTodo = i => {
    let todosCopy = this.state.todos.slice();
    
    todosCopy.splice(i, 1);
    this.setState({todos: todosCopy});
  }
  render(){
    const { userName } = this.state;
    const suffix = userName ? <Icon type="close-circle" onClick={this.emitEmpty} /> : null;
    
    let bulletedTodos = this.state.todos.map((e,i) => {
      return (
        <SingleTodo todo={e} delete={() => this.deleteTodo(i)}/>
      );
    });  
    return(
      <div style={{ padding: 20}}>
        <Row>
        <Col span={12}>
          <Input addonBefore="Http://" addonAfter=".com" onChange={this.onInputChange} value={this.state.currentTodo} />
          <Button type="primary" onClick={this.onClick}>Add!</Button>
          <br/>

          <div style={{ marginBottom: 16 }}>
            <Input addonBefore="Http://" addonAfter=".com" defaultValue="mysite" />
          </div>
            {this.state.todos.length === 0 ? "No todos" : <ul>{bulletedTodos}</ul>}
            
              <div>
                <Button type="primary">Primary</Button>
                <Button>Default</Button>
                <Button type="dashed">Dashed</Button>
                <Button type="danger">Danger</Button>
              </div>
          
            <Input
            placeholder="Enter your username"
            prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
            suffix={suffix}
            value={userName}
            onChange={this.onChangeUserName}
            ref={node => this.userNameInput = node}/>
        </Col>
        <Col span={12}>
        </Col>
        </Row>
      </div>
    );
  }
}
export default App;
