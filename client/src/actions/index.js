import axios from 'axios';
import { FETCH_USER } from './types';

//redux-thunk will automatically feed in a displatch param
export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user')
  dispatch({ type: FETCH_USER, payload: res.data });
};
