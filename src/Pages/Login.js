import React, { useState, useEffect } from 'react';
import Login1 from '../images/sol-login.png';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem('user'));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      toast.success('Login successful');
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      toast.error('Invalid credentials');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <>
      <div className='main'>
        <div className='login'>
          <img src={Login1} id='login' alt='Login' />
          <div className='form01'>
            <form onSubmit={handleLogin}>
              <h1>Login</h1>
              <label>Email</label>
              <br />
              <input type='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
              <br />
              <label>Password</label>
              <br />
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <br />
              <button type='submit'>Submit</button>
              <br />
              <NavLink to='/register' id='link'>
                <p>Click here to Register</p>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
