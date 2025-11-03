import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { MultipleCustomHooks } from './pages/MultipleCustomHooks.jsx'
import { App } from './pages/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < App/>
    <MultipleCustomHooks/>
  </StrictMode>,
)
