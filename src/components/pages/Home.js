import React from 'react'
import styled from 'styled-components'


const Div = styled.div`
  position: relative;
  left: 50%;
  top: 45vh;
  margin-left: -40%;
  margin-top: -50px;
  width: 80%;
  min-height: 100px;
  background: #f5f5f5;
  padding: 10px;
  text-align: center;
`

const Home = () => (
  <Div>
    <h1>Home Page</h1>
    <p>This is the home page and landing page.</p>
  </Div>
)

export default Home;