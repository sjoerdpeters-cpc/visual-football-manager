import React from 'react';
import ReactDOM from 'react-dom/client';
import { StadiumMap } from './components/StadiumMap';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StadiumMap />
  </React.StrictMode>,
);
