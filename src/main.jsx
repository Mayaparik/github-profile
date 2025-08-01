import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProfileGit from './ProfileGit.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProfileGit />
  </StrictMode>,
)
