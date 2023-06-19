import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers';

// eslint-disable-next-line import/no-anonymous-default-export
export default () =>
  configureStore({
    reducer: reducers,
  });