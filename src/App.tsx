// src/App.tsx
import React from 'react';
import { GlobalStyle } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';


const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <HomePage />
    </>
  );
};

export default App;
