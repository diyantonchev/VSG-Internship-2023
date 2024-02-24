import { useEffect, useState, useRef } from 'react';

const UseEffectExample = () => {
  const [text, setText] = useState('');
  const [count, setCount] = useState(0);
  const [lastUpdated, setLastUpdated] = useState('');
  const [timesUpdated, setTimesUpdated] = useState(0);

  const isFirstRender = useRef(true);

  useEffect(() => {
    console.log('performing side effect...');

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const now = new Date();
    const date = now.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' });
    const time = now.toLocaleTimeString('en-US', { hour12: false });

    setLastUpdated(`${date} ${time}`);
    setTimesUpdated(prevTimesUpdated => prevTimesUpdated + 1);

    return () => {
    console.log('Cleaning up side effect...');
    };
  }, [count, text]);

  console.log('rendering...');
  return (
    <>
      <div className='mt-32 mb-16'>
        <div>Times updated: {timesUpdated}</div>
        <div>Last updated: {lastUpdated}</div>
      </div>

      <div className='mb-16'>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <span className='ml-8 mr-8'>{count}</span>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </div>
    </>
  );
};

export default UseEffectExample;
