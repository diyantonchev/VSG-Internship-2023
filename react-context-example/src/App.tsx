import { useState } from 'react'

import { ThemeContext } from './context/ThemeContext'
import Layout from './Layout';
import { Theme } from './types/types'

function App() {
  const [theme, setTheme] = useState<Theme>(Theme.Light);

  const toggleTheme = () => {
    setTheme((prevTheme) => prevTheme === Theme.Light ? Theme.Dark : Theme.Light);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Layout />
    </ThemeContext.Provider>
  )
}

export default App
