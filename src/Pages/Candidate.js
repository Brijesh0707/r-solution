import React, { useState, useEffect } from 'react';
import './Candidate.css';
import candidatesData from '../candidates.json';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Candidate = () => {
  const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [candidates, setCandidates] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
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

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleJobRoleChange = (e) => {
    setJobRole(e.target.value);
  };

  const handleSend = () => {
    toast.success('Message Sent');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the user is logged in
    const user = JSON.parse(localStorage.getItem('user'));
    if (!user) {
      navigate('/login');
      return;
    }

    if (!location || !jobRole) {
      setError('Please select both location and job role.');
      setCandidates([]);
      return;
    }

    setError('');
    setIsLoading(true);
    setLocation('');
    setJobRole('');

    setTimeout(() => {
      const filteredCandidates = candidatesData.filter(
        (candidate) =>
          candidate.location.toLowerCase().includes(location.toLowerCase()) &&
          candidate.jobRole.toLowerCase().includes(jobRole.toLowerCase())
      );

      setCandidates(filteredCandidates);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <>
      <section id="search">
        <div className="container-fluid">
          <div className="row justify-content-evenly text-center">
            <div className="col-md-12" id="form">
              <h1>Search Candidates</h1>
              <form onSubmit={handleSubmit}>
                <select value={location} onChange={handleLocationChange}>
                  <option value="">Select Location</option>
                  <option value="New York">New York</option>
                  <option value="Los Angeles">Los Angeles</option>
                  <option value="Chicago">Chicago</option>
                  <option value="Ahmedabad">Ahmedabad</option>
                  <option value="Mumbai">Mumbai</option>
                </select>
                <select value={jobRole} onChange={handleJobRoleChange}>
                  <option value="">Select Job Role</option>
                  <option value="Front-end Developer">Front-end Developer</option>
                  <option value="Back-end Developer">Back-end Developer</option>
                  <option value="Full Stack Developer">Full Stack Developer</option>
                </select>
                <br />
                <button type="submit">Search</button>
              </form>
              {error && <p className="error">{error}</p>}
            </div>
          </div>
        </div>
        <br></br>
        <div className="container">
          <div className="row text-center">
            {isLoading ? (
              <div className="loading-spinner">Loading...</div>
            ) : (
              candidates.map((candidate) => (
                <div key={candidate.id} className="col-md-4" id="data">
                  <h3>{candidate.name}</h3>
                  <p>Location: {candidate.location}</p>
                  <p>Job Role: {candidate.jobRole}</p>
                  <button type="button" onClick={handleSend}>
                    Send Msg
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Candidate;
