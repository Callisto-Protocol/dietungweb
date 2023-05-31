import { requestGet } from '@/config';
import { HOME } from '@/constants/initHTTP.js';
import { GET_ALL_TODO } from '@/constants/initTYPE.js';

export const getAllTodo = () => {
  return async (dispatch) => {
    try {
      let res = await requestGet(HOME.GET_ALL_TODO);
      dispatch({ type: GET_ALL_TODO, payload: res });
    } catch (e) {
      console.log('getAllTodo ', JSON.stringify(e));
    }
  };
};
