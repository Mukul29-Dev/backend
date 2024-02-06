import './App.css';
import React from 'react'
import Main from './Components/Main App/Main.jsx'
import { BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
}

export default App;
