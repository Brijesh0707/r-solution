import React from 'react';
import './Navbar.css';
import { NavLink, useNavigate } from 'react-router-dom';
import Menu from '../images/menu.jpg'

const Navbar = () => {
  const userEmail = JSON.parse(localStorage.getItem('user'))?.email;
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear the user data from localStorage
    localStorage.removeItem('user');
    navigate('/login');
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <NavLink to="/" id="link">
            <a className="navbar-brand" href="#">
              RECRUITER'S
            </a>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <img src={Menu} width="30" height="30"/>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <NavLink to="/" id="link">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Home
                  </a>
                </li>
              </NavLink>
              {userEmail ? (
                <>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      {userEmail}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#" onClick={handleLogout}>
                      Logout
                    </a>
                  </li>
                </>
              ) : (
                <NavLink to="/login" id="link">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Login
                    </a>
                  </li>
                </NavLink>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
