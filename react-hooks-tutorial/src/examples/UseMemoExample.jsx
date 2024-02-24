import { useMemo } from 'react';
import PropTypes from 'prop-types';

const calculatePrice = () => Math.floor(Math.random() * (8000 - 1800 + 1)) + 1800;

const UseMemoExample = ({ data = [] }) => {

  const marketItems = useMemo(() => {
    return data.map((item) => ({ ...item, price: calculatePrice() }))
  }, [data]);

  const date = useMemo(() => new Date().toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: '2-digit' }), []);

  return (
    <>
      <h3 className='mb-16'>Date: {date}</h3>
      <ul>
        {marketItems.map((item) => (
          <li key={item.id}>
            {item.title} - {item.price?.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
          </li>
        ))}
      </ul>
    </>
  );
};

UseMemoExample.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number
  })).isRequired
};

export default UseMemoExample;
