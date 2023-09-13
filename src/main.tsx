import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const main = document.getElementById('main') as HTMLElement;

ReactDOM.createRoot(main).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
