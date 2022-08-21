import { configureStore } from '@reduxjs/toolkit';
import { namesArrow } from './timerReducer';

const store = configureStore({
  reducer: {
    namesArrow,
  },
});

export default store;
