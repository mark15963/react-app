
import { ReactDOM } from 'react-dom/client';
import { createRoot } from 'react-dom/client';
import { React } from 'react';
import './main.css'
//import { Button } from './components/button.jsx';
//import { UserName } from './components/user.jsx'
//import { MainBlock } from './content.jsx';
import { App } from './App'
import { BrowserRouter } from 'react-router-dom';


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
