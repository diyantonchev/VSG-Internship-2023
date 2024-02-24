import { useState, useEffect } from 'react';

const ComponentWithHooks = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    console.log('useEffect is called!');
  
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((result) => {
        setData(result);
      });

    return () => {  
      console.log('Component will unmount');
    }
  }, []);

  useEffect(() => {
    if (!data.length) return;

    console.log('State Data has changed!');
  }, [data]);

  console.log('Component is rendered!');
  return (
    <>
      {data.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
};

export default ComponentWithHooks;
