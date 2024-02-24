// import { combineReducers } from 'redux';
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
// import {
//   SET_USER,
//   SET_CRYPTOCURRENCY_PAIR,
//   SET_EXCHANGE
// } from './types';

import { User, ExchangeState } from '../types';

// const userReducer = (state = {}, action: { type: string, payload: User }) => {
//   if (action.type === SET_USER) {
//     return action.payload;
//   }

//   return state;
// };

// const cryptocurrencyPair = (state = '', action: { type: string, payload: string }) => {
//   if (action.type === SET_CRYPTOCURRENCY_PAIR) {
//     return action.payload;
//   }

//   return state;
// };

// const selectedExchange = (state = '', action: { type: string, payload: string }) => {
//   if (action.type === SET_EXCHANGE) {
//     return action.payload;
//   }

//   return state;
// }

// export default combineReducers({
//   user: userReducer,
//   exchange: combineReducers({
//     cryptocurrencyPair,
//     selectedExchange
//   })
// });

const userSlice = createSlice({
  name: 'user',
  initialState: {} as User,
  reducers: {
    setUser(_, { payload }: PayloadAction<User>) {
      return payload;
    }
  },
});

const exchangeSlice = createSlice({
  name: 'exchange',
  initialState: {} as ExchangeState,
  reducers: {
    setCryptocurrencyPair(state, { payload }: PayloadAction<string>) {
      state.cryptocurrencyPair = payload
    },
    setExchange(state, { payload }: PayloadAction<string>) {
      state.selectedExchange = payload
    }
  },
});

export const { setUser } = userSlice.actions;
export const { setCryptocurrencyPair, setExchange } = exchangeSlice.actions;

export default { 
  user: userSlice.reducer,
  exchange: exchangeSlice.reducer 
};
