import { Outlet } from 'react-router-dom';

import Header from './components/Header';

import './App.css';

const App = () => (
  <>
    <Header />

    <main className='main-content'>
      <Outlet />
    </main>
  </>
);

export default App;
