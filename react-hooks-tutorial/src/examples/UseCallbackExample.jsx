import { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const Child = ({ getTitle }) => {
  
  useEffect(() => {
    console.log('getTitle updated');
  }, [getTitle]);

  return (
    <h3>
      {getTitle()}
    </h3>
  );
};

const Parent = () => {
  const [count, setCount] = useState(0);

  // const getTitle = () => 'Title';

  const getTitle = useCallback(() => {
    return 'Title';
  }, []);

  return (
    <>
      <Child getTitle={getTitle} />
      <div>
        <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
        <span className='ml-8 mr-8'>{count}</span>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
      </div>
    </>
  )
};


Child.propTypes = {
  getTitle: PropTypes.func.isRequired
};

export { Parent as UseCallbackExample };
