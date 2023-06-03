import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Event, Home, Login } from '@/layouts';

const Routers = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route path='/event' element={<Event />} />
      <Route path='/home' element={<Home />}/>
    </Routes>
  );
};

export default Routers;
