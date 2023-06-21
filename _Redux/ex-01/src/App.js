
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const count = useSelector(state => state.count)


   const increment = () => {
    dispatch({
      type: 'INCREMENT'
    });
  };
  const decrement = () => {
    dispatch({
      type: 'DECREMENT'
    });
  }
  const reset = () => {
    dispatch({
      type: 'RESET'
    });
  }
  const incrementByCount = () => {
    dispatch({
      type: 'INCREMENT_BY_COUNT',
      payload: 10
    });
  }

  return (
    <div className="App">
      <h1>
        Counter is <span> {count} </span>
      </h1>
        <button onClick={increment}>INCREMENT</button>
        <button onClick={decrement}>DECREMENT</button>
        <button onClick={reset}>RESET</button>
        <button onClick={incrementByCount}>INCREMENT BY COUNT</button>
    </div>
  );
}

export default App;