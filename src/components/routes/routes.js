import React from 'react'
import styled from 'styled-components'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import { isAuthenticated } from '../actions/auth'
import Navbar from './../layout/Navbar'

import Home from './../pages/Home'
import About from './../pages/About'

import Profile from './../pages/protect/Profile'

import './anime.css'

const PrivateRoute = ({ component: Component, ...rest}) => (
  <Route {...rest} render={props => (
    isAuthenticated() ? 
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
    <Navbar />
    <Main>
      <TransitionGroup>
        <CSSTransition
          in={true}
          enter={true}
          classNames="fade"
          timeout={500}
        >
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <PrivateRoute path="/profile" component={Profile} />
          </Switch>
        </CSSTransition>
      </TransitionGroup>
    </Main>
  </BrowserRouter>
);

export default Routes;