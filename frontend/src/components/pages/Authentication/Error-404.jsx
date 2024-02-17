import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from "axios";

const Error404 = () => {

  const [red, setRed] = useState('/login')
  useEffect( () => {
    async function fetchData() {
      try {
        const res =  await axios.get("http://localhost:3000/validate", {withCredentials: true})
        setRed(res.data==='student'?'/studentdashboard':'/teacherdashboard')
      } catch (err) {
        console.log(err)
      }
    }
    fetchData()
  }, []);
  return (
    <div className="main-wrapper">
  <div className="error-box">
    <h1>404</h1>
    <h3 className="h2 mb-3">
      <i className="fas fa-exclamation-triangle" /> Oops! Page not found!
    </h3>
    <p className="h4 font-weight-normal">
      The page you requested was not found.
    </p>
    <Link to={red} className="btn btn-primary">
      Back to Home
    </Link>
  </div>
</div>

  )
}

export default Error404
