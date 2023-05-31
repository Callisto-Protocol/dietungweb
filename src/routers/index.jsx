import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home, Event, Login } from '@/layouts';

const Routers = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Home />} />
      <Route path='/event' element={<Event />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  );
};

export default Routers;
