import { StrictMode } from 'react'
import './globals.css';
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from './contexts/ThemeProvider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)
