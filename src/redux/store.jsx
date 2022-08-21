import { configureStore } from '@reduxjs/toolkit';

import { namesArrow } from './timerReducer';

const store = configureStore({
  reducer: {
    namesArrow,
  },
});

export default store;

import { createAction, createReducer } from '@reduxjs/toolkit';

export const increment = createAction('myValue/increment');
export const decrement = createAction('myValue/decrement');

const myReducer = createReducer(0, {
  [increment]: (state, action) => state + action.payload,
  [decrement]: (state, action) => state - action.payload,
});

export const add = createAction('items/add');
export const remove = createAction('items/remove');

const itemsReducer = createReducer([], {
  [add]: (state, action) => [...state, action.payload],
  // [add]: (state, action) => state.push(action.payload),
  [remove]: (state, action) => state.filter(item => item.id !== action.payload),
});

export const store = configureStore({
  reducer: {
    myValue: myReducer,
    items: itemsReducer,
  },
});
