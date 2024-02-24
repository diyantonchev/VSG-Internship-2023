import { rest } from 'msw';

import { KRAKEN_API_URL } from '../constants';
import trades from './kraken-trades-mock.json';

const krakenHandlers = [
  rest.get(`${KRAKEN_API_URL}Ticker`, (_, res, ctx) => {

    const response = {
      error: [],
      result: {
        'XXBTZUSD': {
          'a': ['26672.10000','12','12.000'],
          'b':['26672.00000','13','13.000'],
          'c':['26672.00000','0.00179979'],
          'v':['996.49381310','1736.22317427'],
          'p':['26689.55989','26716.90030'],
          't':[10657,18009],
          'l':['26554.80000','26554.80000'],
          'h':['26794.70000','26839.80000'],
          'o':'26715.90000'
        }
      }
    }

    return res(ctx.json(response));
  }),

  rest.get(`${KRAKEN_API_URL}Trades`, (_, res, ctx) => {

    return res(ctx.json(trades));
  }),
];

export default krakenHandlers;
