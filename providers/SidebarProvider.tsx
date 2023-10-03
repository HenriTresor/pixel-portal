import React from 'react'

type Props = {
    children: React.ReactNode
}

type defaultTypes = {
    isOpen: boolean;
    setIsOpen: (vl: boolean) => void;
}
const defaultValues = {
    isOpen: false,
    setIsOpen: () => { }
}

export const SideBarContext = React.createContext<defaultTypes | null>(defaultValues)

function SidebarProvider({ children }: Props) {

    const [isOpen, setIsOpen] = React.useState(false)
    const value: defaultTypes = {
        isOpen,
        setIsOpen
    }
    return (
        <SideBarContext.Provider value={value}>
            {children}
        </SideBarContext.Provider>
    )
}

export default SidebarProvider