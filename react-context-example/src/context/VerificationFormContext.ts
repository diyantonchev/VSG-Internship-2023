import { createContext } from 'react';

import { IVerificationForm, VerificationFormUpdateAction } from '../types/types';

export interface IVerificationFormContextType {
  form: IVerificationForm;
  dispatch: (action: VerificationFormUpdateAction) => void;
}

export const VerificationFormContext = createContext<IVerificationFormContextType>({} as IVerificationFormContextType);
