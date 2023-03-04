import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login({ auth }) {
  const navigates = useNavigate();
  const [data, setData] = useState("");
  const [logInfo, setLoginInfo] = useState({});

  const getData = (e) => {
    setData(e.target.value);
    setLoginInfo((old) => { return { ...old, [e.target.name]: data } })
  }

  const loginInformation = (e) => {
    e.preventDefault()
    sessionStorage.setItem("loginInformation", JSON.stringify(logInfo));
    auth();
    console.log(sessionStorage.getItem("loginInformation"))
    navigates("/Home")
  }

  return (
    <div className='formdiv'>
      <h3>Login</h3>
      <form onSubmit={loginInformation}>
        <label htmlFor="">email</label>&nbsp; &nbsp;
        <input type="email" placeholder='email' className='email' name="email" value={logInfo.name} onChange={getData} /><br /><br />
        <label htmlFor="password">password</label>&nbsp; &nbsp;
        <input type="pasword" placeholder='password' name="password" value={logInfo.name} onChange={getData} /><br /><br />
        <input type="submit" value="submit" />
      </form>
    </div>
  )

}

export default Login