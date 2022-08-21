
export const App = () => {
  return <div>hihihi</div>;

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from 'redux/store';

export const App = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.myValue);
  console.log(value);
  return (
    <div>
      {value}
      <button type="button" onClick={() => dispatch(increment(1))}>
        Increment
      </button>
      <button type="button" onClick={() => dispatch(decrement(1))}>
        Decrement
      </button>
    </div>
  );

};
