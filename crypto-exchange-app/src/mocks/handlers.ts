import binanceHandlers from './binance-handlers';
import bitfinexHandlers from './bitfinex-handlers';
import krakenHandlers from './kraken-handlers';

const handlers = [
  ...binanceHandlers,
  ...bitfinexHandlers,
  ...krakenHandlers,
];

export default handlers;
