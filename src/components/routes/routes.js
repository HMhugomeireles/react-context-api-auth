import React, { Fragment } from 'react'
import styled from 'styled-components'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import * as Context from './../context'

import Navbar from './../layout/Navbar'

import Home from './../pages/Home'
import About from './../pages/About'
import Login from './../pages/Login'

import Profile from './../pages/protect/Profile'



const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={props => console.log(props.auth) || (
    props.auth ? 
      ( <Component {...rest} /> ) 
    :
      ( <Redirect to={{ pathname: '/', state: { from: props.location } }} /> )
  )}/>
);

const Main = styled.div`
  padding: 10px;
`


const Routes = () => (
  <BrowserRouter>
    <Context.Auth.default>
    {console.log(Context.Auth)}
      { ({ Auth }) => console.log("ss") || (
        <Fragment>
          <Navbar />
          <Main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <PrivateRoute path="/profile" component={Profile} />
              <Route exact path="/login" component={Login}  />
            </Switch>
          </Main>
        </Fragment>
      )}
    </Context.Auth.default>
  </BrowserRouter>
);

export default Routes;