import { useContext } from 'react';
import FormGroup from '@mui/material/FormGroup';
import AntSwitch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import { ThemeContext } from './context/ThemeContext';
import { Theme } from './types/types';
import VerificationForm from './verification/VerificationForm';

const Layout = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const isDarkTheme = theme === Theme.Dark;

  return (
    <div style={{
      height: '100vh',
      padding: '1rem',
      backgroundColor: isDarkTheme ? '#242424' : '#fff' , 
      color: isDarkTheme ? '#fff': '#000' 
      }}
    >
      <FormGroup>
        <Stack direction='row' spacing={1} alignItems='center'>
          <Typography>Light</Typography>
          <AntSwitch onChange={toggleTheme} inputProps={{ 'aria-label': 'ant design' }} />
          <Typography>Dark</Typography>
        </Stack>
      </FormGroup>
      <h3>
        What is Lorem Ipsum?
      </h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <h3>
        Why do we use it?
      </h3>
      <p>
        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </p>
      <VerificationForm />
    </div>
  );
}

export default Layout;
