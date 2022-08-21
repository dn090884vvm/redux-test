import React from 'react';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import * as timerActions from './redux/timerActions';
import css from './Timer.module.css';
// import { useEffect } from 'react';

const Timer = () => {
  const dispatch = useDispatch();
  //   const value = useSelector(state => state.timer);
  const name = useSelector(state => state.namesArrow.filter);
  const arrow = useSelector(state => state.namesArrow.contacts);

  const gettedContacts = arrow;

  const getFilteredContacts = () => {
    const normalizedFilter = name.toLowerCase();

    return gettedContacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  //   const store = useSelector(state => state);
  //   console.log('store', store);

  //   console.log('name', arrow);

  //   console.log(value);
  //   console.log(name);
  const handleSubmit = e => {
    e.preventDefault();
    const xxx = {
      id: nanoid(),
      name: e.target.elements.name.value,
      phone: e.target.elements.phone.value,
    };
    dispatch(timerActions.nameAdd(xxx));
    e.target.elements.name.value = '';
    e.target.elements.phone.value = '';
  };

  const handleInput = e => {
    dispatch(timerActions.namechange(e.target.value));
  };

  const deleteContact = id => {
    dispatch(timerActions.deleteCon(id));
    // console.log(id);
  };

  return (
    <div className={css.container}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={e => {
            // console.log(e.target.value);
            // dispatch(timerActions.namechange(e.target.value));
          }}
        />

        <input
          type="text"
          name="phone"
          onChange={e => {
            // console.log(e.target.value);
            // dispatch(timerActions.namechange(e.target.value));
          }}
        />
        <div>{name}</div>
        <button type="submit">click</button>
      </form>
      <input type="text" name="" onChange={handleInput} />
      <ul>
        {getFilteredContacts().map(({ id, name, phone }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{phone}</p>
            <button onClick={() => deleteContact(id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Timer;
