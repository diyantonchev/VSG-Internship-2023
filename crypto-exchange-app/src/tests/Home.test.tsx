
import { render, screen, findAllByRole } from 'test-utils';
import userEvent from '@testing-library/user-event';
import mockServer from 'mock-server';
import Home from '../pages/Home';

describe('Home', () => { 
  beforeAll(() => mockServer.listen());

  afterEach(() => mockServer.resetHandlers());

  afterAll(() => mockServer.close());

  it('should renders Home component', () => {
    render(<Home />);

    const searchBox = screen.getByRole('searchbox');
    const searchBtn = screen.getByRole('button', { name: /search/i });
    const pricesGrid = screen.getByRole('grid');

    expect(searchBox).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();
    expect(pricesGrid).toBeInTheDocument();
  });

  it('should search for cryptocurrency pair', async () => {
    render(<Home />);

    const user = userEvent.setup();

    const searchBox = screen.getByRole('searchbox');
    const searchBtn = screen.getByRole('button', { name: /search/i });
    

    await user.type(searchBox, 'BTC/USD');
    await user.click(searchBtn);

    const pricesGrid = await screen.findByRole('grid');
    const gridRows = await findAllByRole(pricesGrid, 'row');

    const binanceCell = screen.getByRole('cell', { name: /binance/i });
    const bitfinexCell = screen.getByRole('cell', { name: /bitfinex/i });
    const krakenCell = screen.getByRole('cell', { name: /kraken/i });

    expect(gridRows).toHaveLength(4); // 3 rows + 1 header row
    expect(binanceCell).toBeInTheDocument();
    expect(bitfinexCell).toBeInTheDocument();
    expect(krakenCell).toBeInTheDocument();
  });
});
