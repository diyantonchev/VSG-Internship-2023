import { rest } from 'msw';

import { BITFINEX_API_URL } from '../constants';
import trades from './bitfinex-trades-mock.json';

const bitfinexHandlers = [
  rest.get(`${BITFINEX_API_URL}ticker/tBTCUSD`, (_, res, ctx) => {
  
    const response = [26682,11.90712211, 26683,17.09358281, -179, -0.00666369, 26683,267.8321728, 26876,26587];
  
    return res(ctx.json(response))
  }),

  rest.get(`${BITFINEX_API_URL}trades/tBTCUSD/hist`, (_, res, ctx) => {

    return res(ctx.json(trades));
  }),
];

export default bitfinexHandlers;
