import { useGetPosts, useCounter } from '../customHooks/';

const CustomHooksExample = () => {
  const { posts, pending } = useGetPosts(22);
  const { count, increment, decrement } = useCounter(0);

  return (
    <>
      <div className='mt-32 mb-16'>
        <button onClick={decrement}>-</button>
        <span className='ml-8 mr-8'>{count}</span>
        <button onClick={increment}>+</button>
      </div>
      {pending && <div>Loading...</div>}
      {Boolean(posts.length) && posts.map(item => (
        <div key={item.id}>{item.title}</div>
      ))}
    </>
  );
}

export default CustomHooksExample;
