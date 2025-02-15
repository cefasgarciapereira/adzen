import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from '@/components/layout/app-sidebar'
import Header from './header'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <SidebarProvider>
            <AppSidebar />
            <main className="w-full">
                <Header />
                <div className="w-full p-4">{children}</div>
            </main>
        </SidebarProvider>
    )
}
