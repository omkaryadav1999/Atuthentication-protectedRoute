import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact"
import Login from './component/Login';
import Nav from "./component/Nav";

function App() {
  const [loginInfo, setLoginInfo] = useState(sessionStorage.getItem("loginInformation"));

  return (
    <div className='main_container'>
      <h1>Authentication</h1>
      <Nav />
      <Routes>
        {!loginInfo && <Route path="/login" element={<Login auth={() => setLoginInfo(sessionStorage.getItem("loginInformation"))} />} />}
        {
          loginInfo && <>
            <Route path='/Home' element={<Home logout={() => setLoginInfo(false)} />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </>
        }
      </Routes>
    </div>
  )

}

export default App