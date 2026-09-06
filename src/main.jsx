import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { GlobalStyles } from '@mui/material'
import App from './App.jsx'

const globalStyles = (
  <GlobalStyles
    styles={{
      '*': { boxSizing: 'border-box' },
      html: {
        margin: 0,
        minHeight: '100%',
        background: '#0b1020',
      },
      body: {
        margin: 0,
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0b1020 0%, #132a43 35%, #1b3b6f 100%)',
        fontFamily: 'sans-serif',
      },
      '#root': {
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #0b1020 0%, #132a43 35%, #1b3b6f 100%)',
      },
    }}
  />
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {globalStyles}
    <App />
  </StrictMode>,
)
