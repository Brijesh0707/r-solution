import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
      <div className='container-fluid ' id="footer1">
        <div className='row justify-content-evenly mt-5' >
          <div className='col-md-5' id="text7">
            <h1>Recruiters</h1><br></br>
            <p>if any issue in login and register so sorry <br></br> for that because i used localstorage <br></br> but i try my best   Thank You.</p>
          </div>
          <div className='col-md-5 '>
            <div className='lists'>
                <div>
                <ul>
                  <li id="heading2">Pages</li>
                  <li>Home</li>
                  <li>Login</li>
                  <li>Register</li>

                </ul>
                </div>
                 <div>
                 <ul>
                  <li id="heading2">Benefit</li>
                  <li>Advanced Candidate Matching</li>
                  <li>Seamless Collaboration</li>
                  <li>Customized Job Postings</li>
                  <li>Efficient Resume Screening</li>
                  <li>Analytics and Insights</li>
                  <li>Mobile-Friendly Experience</li>

                </ul>
                 </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer