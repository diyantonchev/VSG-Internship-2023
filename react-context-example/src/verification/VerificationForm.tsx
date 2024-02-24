import { useState, useReducer, SyntheticEvent, Reducer } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import { VerificationFormContext } from '../context/VerificationFormContext';
import { IVerificationForm, VerificationFormUpdateAction } from '../types/types';
import PersonalInfo from './PersonalInfo';
import Contacts from './Contacts';
import Confirm from './Confirm';

const initialState: IVerificationForm = { 
  name: '',
  email: '',
  phone: '',
  address: '',
  city: '',
  errors: []
};

const formReducer: Reducer<IVerificationForm, VerificationFormUpdateAction> = (state: IVerificationForm, action: VerificationFormUpdateAction) => {
  switch (action.type) {
    case 'UPDATE_FORM':
      return {
        ...state,
        [action.field]: action.value
      };
      case 'VALIDATE_EMAIL': {
        const isEmailValid = action.value.toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );

        const errors = isEmailValid ? state.errors.filter((error) => error.field !== 'email') : [...state.errors, { field: 'email', message: 'Email is invalid' }];
 
        return {
          ...state,
          errors
        };
      }
    case 'VALIDATE_PHONE': {
      const isPhoneValid = action.value.toLowerCase()
      .match(
        /^\d{10}$/
      );

      const errors = isPhoneValid ? state.errors.filter((error) => error.field !== 'phone') : [...state.errors, { field: 'phone', message: 'Phone is invalid' }];

      return {
        ...state,
        errors
      };
    }
    case 'RESET_FORM':
      return initialState;
    default:
      return state;
  }
};

const VerificationForm = () => {
  const [form, dispatch] = useReducer<Reducer<IVerificationForm,VerificationFormUpdateAction>>(formReducer, initialState);
  
  const [tab, setTab] = useState<number>(0);

  const onTabChange = (e: SyntheticEvent, newTab: number) => {
    setTab(newTab);
  };

  return (
    <VerificationFormContext.Provider value={{ form, dispatch }}>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tab} onChange={onTabChange} textColor='primary' indicatorColor='primary' aria-label='basic tabs example'>
            <Tab label='Personal Info' {...a11yProps(0)} />
            <Tab label='Contact' {...a11yProps(1)} />
            <Tab label='Confirm' {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={tab} index={0}>
          <PersonalInfo />
        </TabPanel>
        <TabPanel value={tab} index={1}>
          <Contacts />
        </TabPanel>
        <TabPanel value={tab} index={2}>
          <Confirm />
        </TabPanel>
      </Box>
  </ VerificationFormContext.Provider>
  );
};

export default VerificationForm;

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, value, index, ...rest } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...rest}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};
