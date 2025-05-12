import { Button } from "../ui/button"
import { Headset } from "lucide-react"
import { SelectScreen } from "./SelectScreen"
import { SelectBranch } from "./SelectBranch"
import { HeaderSidebar } from "./HeaderSidebar"

export const Sidebar = () => {
    return (
        <aside className="h-vh w-[240px] flex flex-col border-r bg-sidebar sticky top-0">
            <HeaderSidebar />

            <div className="flex flex-col gap-2 p-4">
                <SelectBranch />
                <SelectScreen />

            </div>

            <Button className="w-[240px] bg-transparent absolute left-0 bottom-4 text-sm text-primary flex items-center justify-between px-4 h-10 font-normal">
                Precisa de ajuda?
                <Headset width={16} height={16} />
            </Button>

        </aside>
    )
}