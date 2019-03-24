import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Menu = styled.ul`
  list-style: none;
  margin: 0;
  padding: 20px;
  background: #f5f5f5;
  color: #444;
  border-bottom: 1px solid #e1e1e1;
  font-family: sans-serif;
  
  li {
    letter-spacing: 2px;
	  display: inline;
    list-style: none;
    margin: 20px;
  }

  a {
    text-decoration: none;
    color: #444;
  }

  a:hover {
    color: #999;
  }
  

`

const Navbar = () => ( 
  <Menu>
    <li><Link  to="/" >Home</Link></li>
    <li><Link  to="/about" >About</Link></li>
    <li><Link  to="/profile" >Profile</Link></li>
  </Menu>
)

export default Navbar;