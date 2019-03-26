import React, { Component } from 'react'
import styled from 'styled-components'

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
  userLogin(event) {
    event.preventDefault();
    
  }

  render() {
    return (
      <Div>
        <Context.AuthContext.Consumer>
          {(context) => console.log(context.state.isLoggedIn()) || (
            <form onSubmit={this.userLogin()}>
              <h3>Login</h3>
  
              <Container>
                <label htmlFor="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username" name="uname" required />
            
                <label htmlFor="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required />
            
                <button onClick={context.logIn}>Login</button>
              </Container>
            </form>
          )}
        </Context.AuthContext.Consumer>
      </Div>
    )
  }
}
