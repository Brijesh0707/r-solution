import React, { useState, useEffect } from 'react';
import '../Pages/Home.css';
import { NavLink, useNavigate } from 'react-router-dom';

const Home = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setLoggedInUser(storedUser);
    }
  }, []);

  const handleSearchCandidate = () => {
    if (!loggedInUser) {
      navigate('/login');
    } else {
      navigate("/candidate");
    }
  };

  return (
    <>
      <section id="home">
        <div className="container-fluid">
          <div className="row text-center">
            <div className="col-md-5" id="text1">
              <h1>Welcome Recruiters</h1>
              <br />
              <h3>Recruiters help you find the best recruitment solution</h3>
            </div>
          </div>
        </div>
      </section>
      <section id='candidate'>
        <div className='container-fluid' id='candidate1'>
          <div className='row'>
            <div className='col-md-12' id='started'>
              <h1>Get Started To Hire Someone</h1>
              <br />
              <NavLink to="/candidate" id='link'>
                <button type='button' id="start" onClick={handleSearchCandidate}>Search Candidate</button>
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section id="benefits">
        <div className='container-fluid'>
          <div className='row' id='text3'>
            <div className='col-md-12 text-center'>
              <h1 id="heading">features and benefits</h1>
            </div>
          </div>
          <div className="row text-center justify-content-evenly mt-5">
            <div className="col-md-3">
              <div className="benefit-item">
                <h3>Advanced Candidate Matching</h3>
                <p>Utilize advanced algorithms to match candidates with job roles based on their skills and preferences.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="benefit-item">
                <h3>Seamless Collaboration</h3>
                <p>Facilitate efficient communication and collaboration between hiring managers, HR professionals, and candidates.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="benefit-item">
                <h3>Customized Job Postings</h3>
                <p>Create customized job postings with rich formatting options to attract top talent.</p>
              </div>
            </div>
          </div>
          <div className="row text-center justify-content-evenly" id='text4'>
            <div className="col-md-3">
              <div className="benefit-item">
                <h3>Efficient Resume Screening</h3>
                <p>Automate the initial screening process by analyzing resumes and identifying the most relevant candidates.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="benefit-item">
                <h3>Analytics and Insights</h3>
                <p>Gain valuable analytics and insights on hiring metrics and candidate performance.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="benefit-item">
                <h3>Mobile-Friendly Experience</h3>
                <p>Access the platform and manage hiring processes seamlessly on any device.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
