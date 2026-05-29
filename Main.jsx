import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './src/Components/App.jsx'
import { HashRouter as Router } from 'react-router-dom' // 1. Add this import

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <App/>
  </React.StrictMode>
);
