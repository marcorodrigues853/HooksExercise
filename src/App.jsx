import './App.css';

import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <h1>COUNTER</h1>
      <Counter></Counter>
      {/* <div className="card">
        <button onClick={() => setCount((count) => ++count)}>-</button>
        count is {count}
        <button onClick={() => setCount((count) => --count)}>+</button>
      </div> */}
    </div>
  );
}

export default App;
