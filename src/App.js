import { useState } from 'react';
import './App.css';
import Characters from './components/Characters';
import MainPage from './components/MainPage'

function App() {
  return (
    <div className="App">
      <MainPage />
      <Characters />   
    </div>
  );
}

export default App;
