import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ logout }) => {
  const navigates = useNavigate();
  const functionCaller = () => {
    logout();
    navigates("/login")
  }
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={functionCaller}>logOut</button>
    </div>
  )
}

export default Home