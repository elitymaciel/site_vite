import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AutomacaoPage from './pages/AutomacaoPage'
import TreinamentosPage from './pages/TreinamentosPage'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/automacao" element={<AutomacaoPage />} />
                <Route path="/treinamentos" element={<TreinamentosPage />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
)
