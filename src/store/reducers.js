import { combineReducers } from '@reduxjs/toolkit';

import homeReducer from '../Components/Home/homeSlice';

const rootReducer = combineReducers({
  homeReducer,
});

export default rootReducer;
