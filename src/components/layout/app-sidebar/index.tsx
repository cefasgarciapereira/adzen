import { Calendar, Home, Settings, Book } from 'lucide-react'

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from '@/components/ui/sidebar'

const items = [
    {
        title: 'Home',
        url: '/',
        icon: Home,
    },
    {
        title: 'Documentação',
        url: '/docs',
        icon: Book,
    },
    {
        title: 'Agendamentos',
        url: '/schedules',
        icon: Calendar,
    },
    {
        title: 'Configurações',
        url: '/settings',
        icon: Settings,
    },
]

export function AppSidebar() {
    return (
        <Sidebar className="dark:bg-gray-900 dark:text-gray-50 border-none">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>AdZen</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <a href={item.url}>
                                            <item.icon />
                                            <span>{item.title}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
