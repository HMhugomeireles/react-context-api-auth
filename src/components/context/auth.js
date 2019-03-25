import React, { Component } from 'react'
import { isAuthenticated } from './../actions/auth'

const DEFAULT_STATE = {
  isLoggedIn: false,
};

export const AuthContext = React.createContext(DEFAULT_STATE);

export default class AuthProvider extends Component {
  state = DEFAULT_STATE;


  logIn = () => {
    this.setState({
      isLoggedIn: isAuthenticated
    }) 
  }

  logOut = () => {
    this.setState({
      isLoggedIn: false
    })
  }

  isLoggedIn() {
    return this.state.isLoggedIn
  }

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          logIn: this.logIn,
          logOut: this.logOut,
          isLoggedIn: this.isLoggedIn
        }}
      >
        {this.props.children}            
      </AuthContext.Provider>
    )
  }
}
