export enum Theme {
  Light = 1,
  Dark = 2,
}

export interface IVerificationForm {
  name: string;
  email: string;
  city: string;
  address: string;
  phone: string;
  errors: { field: string; message: string }[];
}

export type VerificationFormUpdateAction =
  | { type: 'UPDATE_FORM'; field: string; value: string }
  | { type: 'VALIDATE_EMAIL'; value: string }
  | { type: 'VALIDATE_PHONE'; value: string }
  | { type: 'RESET_FORM' };
