import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

const AppRoot = document.getElementById('main') as HTMLElement;

ReactDOM.createRoot(AppRoot).render(
  <React.StrictMode>
  <App />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('main') as HTMLElement).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
 