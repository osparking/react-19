import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FreshFoodTable from './FreshFoodTable.jsx'
import './index.css'
import BumSoap from './App.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BumSoap />
  </StrictMode>,
)
