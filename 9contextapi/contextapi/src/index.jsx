import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ContadorContextProvider } from './context/ContadorContext';
import { CorTituloContextProvider } from './context/CorTituloContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  {/* 2 - criando provider */}
    <ContadorContextProvider>
      {/* os contexts podem ser acessados em quaisquer paginas do App */}
      <CorTituloContextProvider>
        <App />
      </CorTituloContextProvider>
    </ContadorContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
