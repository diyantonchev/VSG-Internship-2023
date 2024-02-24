import { useContext, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { VerificationFormContext } from '../context/VerificationFormContext';

const PersonalInfo = () => {
  const { form, dispatch } = useContext(VerificationFormContext);


  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: 'UPDATE_FORM', field: e.target.id, value: e.target.value || '' });
  };

  return (
    <Box
      component='form'
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete='off'
    >
      <TextField id='name' value={form.name} onChange={handleChange} label='Name' variant='standard' /><br />
      <TextField id='city' value={form.city} onChange={handleChange} label='City' variant='standard' /><br />
      <TextField id='address' value={form.address} onChange={handleChange} label='Address' variant='standard' /><br />
    </Box>
  );
}

export default PersonalInfo;
