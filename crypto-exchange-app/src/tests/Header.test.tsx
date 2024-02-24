
import { render, screen } from 'test-utils';
import Header from '../components/Header';

describe('Header', () => { 
  it('should renders Header component', () => {
    render(<Header />);

    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Crypto Exchange')).toBeInTheDocument();
  });

  it('it should match the snapshot', async () => {
    const { container } = render(<Header />);

    expect(container).toMatchSnapshot();
  });
});
