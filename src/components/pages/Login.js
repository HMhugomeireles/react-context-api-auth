import React, { Component, Fragment } from 'react'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

import * as Context from './../context'

const Div = styled.div`
  width: 60%;
  border: 3px solid #f1f1f1;
  position: relative;
  margin: auto;

  font-family: sans-serif;

  h3 {
    text-align: center;
    padding: 5px;
  }
`
const Container = styled.div`
  padding:16px;

  input[type=text], input[type=password] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }

  button {
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  button:hover {
    opacity: 0.8;
  }
`

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
     username: '',
     password: '' 
    }
    this.userLogin = this.userLogin.bind(this);
    this.handleInputsChanges = this.handleInputsChanges.bind(this);
  }

  handleInputsChanges(event) {
    this.setState({
      [event.target.name]: event.target.value
    })    
  }

  userLogin(event) {
    event.preventDefault();
    
    const User = {
      username: this.state.username,
      password: this.state.password,
    }

    console.log(User)
    // Make request to api for make login

    //this.props.history.push('/')
    
  }

  render() {
    return (
      <Div>
        <Context.AuthContext.Consumer>
          {(context) =>  (
            <Fragment>
            { context.isLoggedIn ?
                <Redirect to='/profile' /> 
              :
                <form onSubmit={this.userLogin}>
                  <h3>Login</h3>
      
                  <Container>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required 
                      
                    />
                
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required 
                    />
                
                    <button onClick={context.logIn}>Login</button>
                  </Container>
                </form>
            }
            </Fragment>
          )}
        </Context.AuthContext.Consumer>
      </Div>
    )
  }
}
