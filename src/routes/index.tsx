import { BrowserRouter, Routes, Route } from 'react-router'

import { DashboardPage, SettingsPage, ManualPage, SchedulesPage } from '@/pages'

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/docs" element={<ManualPage />} />
                <Route path="/schedules" element={<SchedulesPage />} />
                <Route path="/settings" element={<SettingsPage />} />
            </Routes>
        </BrowserRouter>
    )
}
