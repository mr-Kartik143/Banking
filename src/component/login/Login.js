import React from 'react'
import { Link } from "react-router-dom";
import "./Login.css"

export default function Login() {
  return (
    <div className='container'>
      <img className=' imgbg' src="Banking/logbg.jpg" alt="" />
     <p className='mt-5 logleb text-light fs-1 text-decoration-underline  fw-bold'>Log in </p> 
      <label className=' text-light fs-6 fw-bold emailleb'>Email Address -</label>
      <input className='my-2 form-control inbox inemail' type="email" placeholder='Email' /><br />
      <label className='text-light fs-6  passlabel fw-bold'>Password -</label>
      <input className='my-2 form-control inbox inpassword' type="password" placeholder='Password' />
      <Link to={'/'}>
      <button className='my-5 btn btn-danger  logbtn fw-bold'>Log in</button> 
      </Link>
    </div>
  )
}
