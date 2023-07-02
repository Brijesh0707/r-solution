import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import {Routes,Route} from "react-router-dom";
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Navbar from './Componets/Navbar';
import Footer from './Componets/Footer';
import Candidate from './Pages/Candidate';



const App = () => {
  return (
    <>
     <Navbar></Navbar>
     <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/candidate' element={<Candidate/>}/>


        
      </Routes>
      <Footer></Footer>


    </>
  )
}

export default App