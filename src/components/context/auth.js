import React, { Component } from 'react'
import { isAuthenticated } from './../actions/auth'


export const AuthContext = React.createContext();

export class AuthProvider extends Component {
  state = {
    isLoggedIn: false,
  };

  logIn = ({ username, password }) => {
    localStorage.setItem('token', 'lojisdbcv09817234t012hvboqweducyg01u4vb01yv3')
    this.setState({ isLoggedIn: true })
  }

  logOut = () => {
    localStorage.removeItem('token');
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

