
import { render, screen, findAllByRole, waitFor } from 'test-utils';
import userEvent from '@testing-library/user-event';
import mockServer from 'mock-server';
import PricesGrid from '../components/PricesGrid';
import store from '../redux/store';
import { setCryptocurrencyPair } from '../redux/reducers';

describe('PricesGrid', () => { 

  beforeAll(() => mockServer.listen());

  beforeEach(async () => await waitFor(() => store.dispatch(setCryptocurrencyPair('BTC/USD'))));

  afterEach(async () =>  {
    mockServer.resetHandlers();

    await waitFor(() => store.dispatch(setCryptocurrencyPair('')));
  });

  afterAll(() => mockServer.close());

  it('should renders PricesGrid component', async () => {
    render(<PricesGrid />);

    const grid = await screen.findByRole('grid');
    const gridRows = await findAllByRole(grid, 'row');

    const binanceCell = screen.getByRole('cell', { name: /binance/i });
    const bitfinexCell = screen.getByRole('cell', { name: /bitfinex/i });
    const krakenCell = screen.getByRole('cell', { name: /kraken/i });

    expect(grid).toBeInTheDocument();
    expect(gridRows).toHaveLength(4); // 3 rows + 1 header row
    expect(binanceCell).toBeInTheDocument();
    expect(bitfinexCell).toBeInTheDocument();
    expect(krakenCell).toBeInTheDocument();
  });

  it('should open Market Trades Window on price click', async () => {
    render(<PricesGrid />);

    const user = userEvent.setup();

    const priceBtn = await screen.findByRole('button', { name: /1 BTC = 26683.000 USD/i });

    await user.click(priceBtn);

    expect(screen.getByRole('dialog')).toBeInTheDocument();
  });

  it('should match the snapshot', async () => {
    render(<PricesGrid />);

    const grid = await screen.findByRole('grid');

    expect(grid).toMatchSnapshot();
  });
});
