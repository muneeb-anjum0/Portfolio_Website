import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
// Use hash-based routing for GitHub Pages compatibility
import { HashRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)
