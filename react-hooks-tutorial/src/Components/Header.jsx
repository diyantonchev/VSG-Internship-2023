import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => (
  <header>
    <nav className='header-nav'>
      <ul>
        <li>
          <NavLink
            to='/'
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/old'>
            The old way
          </NavLink>
        </li>
        <li>
          <NavLink to='/new'>
            The hooks way
          </NavLink>
        </li>
        <li>
          <NavLink to='/useState'>
            useState
          </NavLink>
        </li>
        <li>
          <NavLink to='/useEffect'>
            useEffect
          </NavLink>
        </li>
        <li>
          <NavLink to='/useRef'>
            useRef
          </NavLink>
        </li>
        <li>
          <NavLink to='/useMemo'>
            useMemo
          </NavLink>
        </li>
        <li>
          <NavLink to='/useCallback'>
            useCallback
          </NavLink>
        </li>
        <li>
          <NavLink to='/custom'>
            Custom Hooks
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
