import React from 'react'
import { Link,  } from 'react-router-dom';
import './style.css'
const Login = () => {
    return (
        <div className='container'>
            <div className='body body0'>
                <img src='https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg' alt='logo' />
            </div>
            <div className='body body1'>
                <h1>Happening now</h1> <br />
                <h4>Join today.</h4>0
                <form>
                    <input type='text' name='fullname' placeholder='username or email'/> <br/>
                    
                    <input type='password' name='password' placeholder='password'/><br/>
                   <div>
                    <button>Login</button>
                    </div>
                </form>
                <span style={{marginRight:'auto'}}>don't have an account?<Link to='/signup'> Sign Up</Link> </span>
            </div>
        </div>
    )
}

export default Login
