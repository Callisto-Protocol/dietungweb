import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTodo } from '@/store/action/index.js';

const Event = () => {
  const dispatch = useDispatch();
  const { Sample } = useSelector((state) => state);
  const [data, setData] = useState([]);
  useEffect(() => {
    dispatch(getAllTodo());
  }, []);

  useEffect(() => {
    if (Sample.todos) {
      setData(Sample.todos);
    } else {
      setData([]);
    }
  }, [Sample.todos]);

  return (
    <div>
      {data &&
        data.map((datum, index) => {
          return (
            <div key={'indx ' + index}>
              <p>{JSON.stringify(datum)}</p>
            </div>
          );
        })}
      <p>Event page</p>
    </div>
  );
};

export default Event;
