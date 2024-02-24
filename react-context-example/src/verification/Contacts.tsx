import { useContext, useMemo, ChangeEvent } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import { VerificationFormContext } from '../context/VerificationFormContext';

const Contacts = () => {
  const { form, dispatch } = useContext(VerificationFormContext);

  const emailError = useMemo(() => form.errors.find(e => e.field === 'email'), [form.errors]);

  const phoneError = useMemo(() => form.errors.find(e => e.field === 'phone'), [form.errors]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => { 
    dispatch({ type: 'UPDATE_FORM', field: e.target.id, value: e.target.value || '' });
  };

  const onEmailBlur = () => {
    dispatch({ type: 'VALIDATE_EMAIL', value: form.email });
  };

  const onPhoneBlur = () => {
    dispatch({ type: 'VALIDATE_PHONE', value: form.phone });
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
      <TextField id='email' value={form.email} onChange={handleChange} onBlur={onEmailBlur} error={Boolean(emailError)} helperText={emailError?.message} label='Email' variant='standard' /><br />
      <TextField id='phone' value={form.phone} onChange={handleChange} onBlur={onPhoneBlur} error={Boolean(phoneError)} helperText={phoneError?.message} label='Phone' variant='standard' /><br />
    </Box>
  );
}

export default Contacts;
