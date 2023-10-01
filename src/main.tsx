
// Pacote responsável pelo core (ambientes)
import React from 'react';

// Core do react com a DOM (Document Object Model)
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')!).render( // Existe sim confia (!)
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
