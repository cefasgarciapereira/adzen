import ThemeToggler from '@/components/theme-toggler'
import { SidebarTrigger } from '@/components/ui/sidebar'

export default function Header() {
    return (
        <header className="w-full flex border-b-1 border-muted gap-2 items-center p-4 dark:bg-zinc-950 dark:text-zinc-50">
            <span className="md:hidden">AdZen</span>
            <div className="w-full flex flex-row-reverse items-center gap-2">
                <SidebarTrigger />
                <ThemeToggler />
            </div>
        </header>
    )
}
