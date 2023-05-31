import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2 className='text-2xl text-indigo-500 tracking-widest font-medium title-font mb-1'>
        React Tailwind and Redux
      </h2>
      <button className='bg-amber-400 px-8 py-8 radius' onClick={() => navigate('/event')}>
        Sample API
      </button>
    </div>
  );
};

export default Home;
