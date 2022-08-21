import { createReducer } from '@reduxjs/toolkit';
import { namechange, nameAdd, deleteCon } from './timerActions';

const initialState = {
  contacts: [],
  filter: '',
};

// export const name = createReducer('', {
//   [namechange]: (state, action) => (state = action.payload),
// });

export const namesArrow = createReducer(initialState, {
  [nameAdd]: (state, action) => {
    state.contacts.push(action.payload);
    window.localStorage.setItem('contacts', JSON.stringify(state.contacts));
  }, //or concat instead push without {} brackets
  //   [nameAdd]: (state, action) => [...state, action.payload],
  [deleteCon]: (state, action) => {
    const newContacts = state.contacts.filter(
      item => item.id !== action.payload
    );
    localStorage.setItem('contacts', JSON.stringify(newContacts));
    return { ...state, contacts: newContacts };
  },

  [namechange]: (state, action) => {
    state.filter = action.payload;
    // const normalizedFilter = state.filter.toLowerCase();
    // return state.contacts.filter(contact =>
    //   contact.name.toLowerCase().includes(normalizedFilter)
    // );
    // return { ...state, contacts: filteredElements };
  },
});
