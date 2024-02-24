import { useContext } from 'react';
import Button from '@mui/material/Button';

import { VerificationFormContext } from '../context/VerificationFormContext';

const Confirm = () => {
  const { form, dispatch } = useContext(VerificationFormContext);

  const onSubmit = () => {
    alert(JSON.stringify(form, null, 2));
  };

  const onReset = () => {
    dispatch({ type: 'RESET_FORM' });
  }; 

  return (
    <>
      <h4>Are you ready?</h4>
      <Button variant='contained' onClick={onSubmit} sx={{ mr: 1 }}>Submit</Button>
      <Button variant='contained' onClick={onReset}>Reset Form</Button>
    </>
  );
};

export default Confirm;
