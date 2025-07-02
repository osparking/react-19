import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FreshFoodTable from './FreshFoodTable.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FreshFoodTable />
  </StrictMode>,
)
