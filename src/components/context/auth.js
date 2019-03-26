import React, { Component } from 'react'
import { isAuthenticated } from './../actions/auth'


export const AuthContext = React.createContext();

export class AuthProvider extends Component {
  state = {
    isLoggedIn: isAuthenticated,
  };

  logIn() {
    this.setState({ isLoggedIn: true })
  }

  logOut() {
    this.setState({ isLoggedIn: false })
  }

  render() {
    return (
      <AuthContext.Provider value={{
        state: this.state,
        logIn: this.logIn,
        logOut: this.logOut
      }}>
        { this.props.children }
      </AuthContext.Provider>
    )
  }
}

