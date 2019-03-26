import React, { Component } from 'react'
//import { isAuthenticated } from './../actions/auth'


export const AuthContext = React.createContext();

export class AuthProvider extends Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
    }
    this.logIn = this.logIn.bind(this);
    this.logOut = this.logOut.bind(this);
  }

  logIn = () => {
    this.setState({isLoggedIn: true})
  }

  logOut = () => {
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

