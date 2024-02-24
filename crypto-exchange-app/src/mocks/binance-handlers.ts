import { rest } from 'msw';

import { BINANCE_API_URL } from '../constants';
import trades from './binance-trades-mock.json';

const binanceHandlers = [
  rest.get(`${BINANCE_API_URL}ticker/price`, (_, res, ctx) => {

    const response = { 
      symbol: "BTCBUSD",
      price: "26656.00000000"
    };

    return res(ctx.json(response));
  }),

  rest.get(`${BINANCE_API_URL}trades`, (_, res, ctx) => {
    return res(ctx.json(trades));
  }),
];

export default binanceHandlers;
