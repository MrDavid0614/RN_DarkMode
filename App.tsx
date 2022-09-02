import React from 'react';
import { ThemeContextProvider } from './src/contexts/ThemeContext';
import { HomeScreen } from './src/screens/Home';

const App = () => (
  <ThemeContextProvider>
    <HomeScreen />
  </ThemeContextProvider>
);

export default App;
