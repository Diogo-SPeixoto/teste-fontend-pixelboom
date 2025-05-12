'use client'

import { DashboardIcon } from "@/assets/icon/DashboardIcon"
import { FileCheck, Settings, User } from "lucide-react"
import { useState } from "react"
import { ItemSidebar } from "./ItemSidebar"

type Screen = "Usuários" | "Documentos" | "Dashboard" | "Geral"

export const SelectScreen = () => {
    const [screen , setScreen] = useState<Screen>("Usuários")
        const menuData = [
            {
                name: "Dashboard",
                icon: DashboardIcon ,
                onClick: () => setScreen("Dashboard")
            },
            {
                name: "Usuários",
                icon: User,
                onClick: () => setScreen("Usuários")
            },
            {
                name: "Documentos",
                icon: FileCheck,
                onClick: () => setScreen("Documentos")
            }
        ]

    return (
        <nav className="flex flex-col gap-1.5">
            <p className="text-sidebar-foreground text-xs p-2 mb-1.5">Menu</p>
            {
                menuData.map((item) => (
                    <ItemSidebar
                        key={item.name} 
                        Icon={item.icon} 
                        isActive={screen === item.name}
                        name={item.name}
                    />
                ))
            }

            <p className="text-sidebar-foreground text-xs p-2 mb-1.5">Configurações</p>
            <ItemSidebar
                Icon={Settings}
                isActive={screen === "Geral"}
                name="Geral"

            />
        </nav>
    )
}