import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"


export const CreateUser = ()=>{
    return(
        <Sheet>
            <SheetTrigger>
                <Button className="bg-[--primary] text-white text-sm rounded-full flex items-center gap-2 hover:bg-[--primary]">
                    <Plus width={16} height={16} />
                    Adicionar 
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-white">
                <SheetHeader>
                    <SheetTitle className="text-2xl font-normal">Adicionar usuário</SheetTitle>
                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}