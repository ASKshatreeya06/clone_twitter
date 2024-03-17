import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'
const Signup = () => {
  return (
    <div className='container'>
    <div className='body body0'>
        <img src='https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg' alt='logo' />
    </div>
    <div className='body body1'>
        <h1>Happening now</h1> <br />
        <h4>Join today.</h4>
        <form>
            <input type='text' name='fullname' placeholder='full name'/> <br/>
            <input type='email' name='email' placeholder='email'/><br/>
            <input type='tel' name='phone' placeholder='phone'/><br/>
            <input type='password' name='password' placeholder='password'/><br/>
           <div>
            <button>Login</button>
            </div>
           
        </form>
        <span>I have an account <Link to="/login">Login</Link></span>
    </div>
</div>
  )
}

export default Signup
