import ThemeToggler from '@/components/theme-toggler'
import { SidebarTrigger } from '@/components/ui/sidebar'

export default function Header() {
    return (
        <header className="w-full flex gap-4 items-center p-4 border-none dark:bg-zinc-950 dark:text-zinc-50">
            <span className="md:hidden">AdZen</span>
            <SidebarTrigger />
            <ThemeToggler />
        </header>
    )
}
