import { useRef, useEffect } from 'react';

const UseRefExample = () => {

  const nameRef = useRef('');
  const ageRef = useRef(0);
  const genderRef = useRef('');

  useEffect(() => {
    console.log('nameRef', nameRef);
    console.log('ageRef', ageRef);
    console.log('genderRef', genderRef);
    
    nameRef.current.focus();
    ageRef.current.style = 'color: red';
    genderRef.current.value = 'other';
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    alert(`Name: ${nameRef.current.value}, Age: ${ageRef.current.value}, Gender: ${genderRef.current.value}`);
  };

  console.log('rendering...');
  return (
    <form onSubmit={onSubmit}>
      <div className='mt-32 mb-16'>
        <label htmlFor='name-field' className='mr-8'>Name:</label>
        <input
          ref={nameRef}
          type='text'
          id='name-field'
          required
        />
      </div>

      <div className='mb-16'>
        <label htmlFor='age-field' className='mr-8'>Age:</label>
        <input
          ref={ageRef}
          type='number'
          id='age-field'
          required
        />
      </div>

      <div className='mb-16'>
        <label htmlFor='gender-field' className='mr-8'>Gender:</label>
        <select ref={genderRef} id='gender-field' required>
          <option value=''>Please select...</option>
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='transgender'>Transgender</option>
          <option value='nonbinary'>Nonbinary</option>
          <option value='genderfluid'>Genderfluid</option>
          <option value='other'>Other</option>
        </select>
      </div>

      <button type='submit'>
        Submit
      </button>
    </form>
  );
};

export default UseRefExample;
