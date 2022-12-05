import { useState } from 'react';
function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div className="fdx">
      <div className="card">
        <button onClick={() => setCount((count) => ++count)}>-</button>
        count is {count}
        <button onClick={() => setCount((count) => --count)}>+</button>
      </div>
    </div>
  );
}

export default Counter;
