import { useEffect, useState } from 'react';

const useGetPosts = (count) => {
  const [posts, setPosts] = useState([]);
  const [pending, setPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then((result) => {
        setPending(false);
        setPosts(result.slice(0, count));
      })
      .catch((err) => setError(err));
  }, [count]);

  return { posts, pending, error };
}

export default useGetPosts;
