import { GET_ALL_TODO } from '@/constants/initTYPE.js';
const initialState = {
  todos: [],
};
const Sample = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_TODO:
      return {
        ...state,
        todos: payload,
      };
    default:
      return state;
  }
};

export default Sample;
