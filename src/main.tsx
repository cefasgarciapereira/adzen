import './index.css'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { ThemeProvider } from './contexts/theme/index.tsx'
import Layout from '@/components/layout/index.tsx'
import Routes from './routes/index.tsx'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Layout>
                <Routes />
            </Layout>
        </ThemeProvider>
    </StrictMode>
)
