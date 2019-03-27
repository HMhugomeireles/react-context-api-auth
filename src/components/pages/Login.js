import React, { Component, Fragment } from 'react'
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
  constructor() {
    super();
    this.state = {
     username: '',
     password: '' 
    }
  }

  render() {
    return (
      <Div>
        <Context.AuthContext.Consumer>
          {({ logIn }) =>  {
            
            const handleFormSubmition = (event) =>{
              event.preventDefault();
              logIn({ 
                username: this.state.username,
                password: this.state.password });

                this.props.history.push('/profile');
            }

            return (
              <Fragment>
                <form onSubmit={handleFormSubmition}>
                  <h3>Login</h3>
                  <Container>
                    <label htmlFor="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="username" required 
                      value={this.state.username}
                      onChange={ e => this.setState({ username: e.target.value })}
                    />
                
                    <label htmlFor="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="password" required 
                      value={this.state.password}
                      onChange={ e => this.setState({ password: e.target.value})}
                    />
                
                    <button type="submit">Login</button>
                  </Container>
                </form>
              </Fragment>
            )

           }
          }
        </Context.AuthContext.Consumer>
      </Div>
    )
  }
}
