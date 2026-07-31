import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ Adicione o "/client" no final
import App from './App';

// ✅ Crie uma "raiz" (root) e use o root.render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);