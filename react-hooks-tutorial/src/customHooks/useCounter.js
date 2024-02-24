import { useState } from 'react';

const useCounter = (initialCount = 0) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount(prevCount => prevCount + 1);
  
  const decrement = () => setCount(prevCount => prevCount - 1);

  return { count, increment, decrement };
};

export default useCounter;
