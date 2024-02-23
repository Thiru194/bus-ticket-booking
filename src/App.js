import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignUp from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import Homepage from './components/Homepage'
import Busbooking from'./components/Busbooking'
import Buslist from './components/Buslist'
import Busdetails from './components/Busdetails'

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/homepage' element={<Homepage/>}></Route>
        <Route path='/bus-booking' element={<Busbooking/>}></Route>
        <Route path='/bus-list' element={<Buslist/>}></Route>
        <Route path="/bus/:id" element={<Busdetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;

