import { useSelector } from 'react-redux';
import { Navbar, Container } from 'react-bootstrap';

import { ApplicationState, User } from '../types';

const Header = () => {
  const user = useSelector<ApplicationState, User>(state => state.user);

  return (
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand href='/'>Crypto Exchange</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              Signed in as: <a role='button'>{user.name}</a>
            </Navbar.Text>
          </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
