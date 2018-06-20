import { combineReducers } from 'redux';
// pre implemented form reducer
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';

export default combineReducers({
  auth: authReducer,
  form: reduxForm //special KEY
});
