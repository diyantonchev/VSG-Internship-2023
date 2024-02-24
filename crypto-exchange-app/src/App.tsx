import { useEffect } from 'react';
import {
  Route,
  Routes,
  BrowserRouter,
  Navigate,
} from 'react-router-dom';
import {  useDispatch } from 'react-redux';

import Header from './components/Header';
import Home from './pages/Home';
import Details from './pages/Details';
import { setUser } from './redux/reducers';
// import { setUser } from './redux/actions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setUser({ id: 'qfgqg&gaeegq#',  name: 'Diyan Tonchev', email: 'dtonchev@vsgbg.com' }));
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
        <Route
          path='/:pair/'
          element={<Home />}
        />
        <Route
          path='/:pair/details'
          element={<Details />}
        />
        <Route path='*' element={<Navigate to={{ pathname: '/' }} replace />} />
      </Routes>
    </BrowserRouter>
  );
};

App.displayName = 'ExchangeApp';
export default App;
