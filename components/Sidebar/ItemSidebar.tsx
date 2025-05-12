import { Button } from "../ui/button";
import { LucideProps } from "lucide-react";

interface ItemSidebarProps {
    Icon: React.ComponentType<{color: string}> | React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>
    isActive: boolean;
    name: string
}

export const ItemSidebar = ({Icon , isActive , name}:ItemSidebarProps) => {
    return (
        <Button
            className={`cursor-pointer flex items-center justify-start gap-3 p-3 w-full bg-transparent hover:bg-primary-foreground rounded-full ${isActive ? "bg-primary  hover:bg-primary" : ""}`} 
        >
            <Icon color={isActive ? "#F4F4F5" : "#3F3F46"} width={16} height={16}/>
            <p className={`text-sm font-medium  ${isActive ? "text-white" : "text-accent-foreground"}`}>{name}</p>
        </Button>
    )
}