import User from "@/assets/user-image.png"
import { Bell, CircleHelp, PanelRightOpen } from "lucide-react"
import Image from "next/image"

export const Header = () => {
    return (
        <header className="h-[72px] w-full border-b flex items-center justify-between p-4">
            <button className="size-10 flex items-center justify-center">
                <PanelRightOpen  width={16} height={16}/>
            </button>
            <div className="flex items-center gap-3">
                <div className="size-10 border rounded-full flex items-center justify-center cursor-pointer">
                    <CircleHelp width={16} height={16} />
                </div>
                <div className="size-10 border rounded-full flex items-center justify-center cursor-pointer">
                    <Bell width={16} height={16} />
                </div>
                <div className="size-10 rounded-full flex items-center justify-center cursor-pointer">
                    <Image src={User} alt="Imagem do usuário." />
                </div>
            </div>
        </header>
    )
}