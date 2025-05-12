import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout'
import React from 'react'

createRoot(document.getElementById('root')!).render(  // Use the non-null assertion operator `!`
  <StrictMode>
    <Layout />
  </StrictMode>,
)
