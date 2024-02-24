import { SET_USER, SET_CRYPTOCURRENCY_PAIR, SET_EXCHANGE } from './types';
import { User } from '../types';

export const setUser = (user: User) => ({  type: SET_USER, payload: user });

export const setCryptocurrencyPair = (cryptocurrencyPair: string) => ({
   type: SET_CRYPTOCURRENCY_PAIR, payload: cryptocurrencyPair 
});

export const setExchange = (exchange: string) => ({
   type: SET_EXCHANGE, payload: exchange 
});
