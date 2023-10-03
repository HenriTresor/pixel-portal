import React from 'react'
import SidebarProvider from './SidebarProvider'

type Props = {
    children: React.ReactNode
}

function AppProvider({ children }: Props) {
    return (
        <SidebarProvider>
            {children}
        </SidebarProvider>
    )
}

export default AppProvider