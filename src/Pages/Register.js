import React, { useState, useEffect } from 'react';
import './Register.css';
import Register1 from '../images/sol-register.png';
import { NavLink } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [companyName, setCompanyName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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

  const handleRegister = (e) => {
    e.preventDefault();

    if (!companyName || !email || !password) {
      toast.error('Please enter all details');
      return;
    }

    const user = {
      companyName,
      email,
      password,
    };
    localStorage.setItem('user', JSON.stringify(user));

    setCompanyName('');
    setEmail('');
    setPassword('');

    toast.success('Registered successfully');
  };

  return (
    <>
      <div className='main1'>
        <div className='register'>
          <img src={Register1} id='register' alt='Register' />
          <div className='form02'>
            <form onSubmit={handleRegister}>
              <h1>Register</h1>
              <label>Company Name</label>
              <br />
              <input
                type='text'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
              <br />
              <label>Email</label>
              <br />
              <input
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label>Password</label>
              <br />
              <input
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button type='submit'>Submit</button>
              <br />
              <NavLink to='/login' id='link'>
                <p>Click here to Login</p>
              </NavLink>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
