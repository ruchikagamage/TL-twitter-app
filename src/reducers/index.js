import {combineReducers} from 'redux';
import authReducer from './auth';
import timelineReducer from './timeline';


const rootReducer = combineReducers({
  auth: authReducer,
  timeline: timelineReducer
});

export default rootReducer;