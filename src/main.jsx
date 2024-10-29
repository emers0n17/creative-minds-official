import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { init } from '@emailjs/browser'

// Inicializa o EmailJS com sua Public Key
init('_OalXyyj1XauVN6KC');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
