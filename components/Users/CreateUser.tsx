import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "../ui/button"
import { Plus } from "lucide-react"
import { notoSerif } from "@/assets/font"
import { Checkbox } from "../ui/checkbox"
import { Switch } from "../ui/switch"
import { toast } from "sonner"
import { useState } from "react"


export const CreateUser = ()=>{
    const [isOpen , setIsOpen] = useState(false)

    return(
        <Sheet open={isOpen}>
            <SheetTrigger>
                <Button onClick={()=>{
                    setIsOpen(true)
                }} className="bg-primary text-white text-sm rounded-full flex items-center gap-2 hover:bg-primary">
                    <Plus width={16} height={16} />
                    Adicionar 
                </Button>
            </SheetTrigger>
            <SheetContent className="bg-white w-3/6 sm:max-w-[560px] p-10" >
                <SheetHeader>
                    <SheetTitle className={`text-2xl font-normal ${notoSerif.className}`}>Adicionar usuário</SheetTitle>
                </SheetHeader>

                <form onSubmit={(e)=>{
                    e.preventDefault()
                    setIsOpen(false)
                    toast("Usuário adicionado com sucesso!", {
                        cancel:{
                            label: "Fechar",
                            onClick: ()=>{},
                            actionButtonStyle:{padding: "16px" , border:"solid 1px #E4E4E7"}
                        },
                        
                    })
                }} className="flex flex-col justify-between h-full" action="">
                    <div className="flex flex-col gap-5">
                        <div className="grid w-full items-center gap-2">
                            <Label htmlFor="name">Nome completo</Label>
                            <Input type="text" id="name" placeholder="Digite o nome" />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="email">Email</Label>
                            <Input type="email" id="email" placeholder="Digite o e-mail" />
                        </div>
                        <div className="grid w-full items-center gap-1.5">
                            <Label htmlFor="tel">Telefone</Label>
                            <Input type="text" id="tel" placeholder="Informe o telefone" />
                            <div className="flex items-center space-x-2">
                                <Checkbox id="whatsApp" />
                                <Label htmlFor="whatsApp">WhatsApp</Label>
                            </div>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="cpf">CPF</Label>
                                <Input type="text" id="cpf" placeholder="Informe o CPF" />
                            </div>
                            <div className="grid w-full items-center gap-1.5">
                                <Label htmlFor="rg">RG</Label>
                                <Input type="text" id="rg" placeholder="Informe o RG" />
                            </div>
                        </div>
                        <div className="w-full p-4 border bg-primary-foreground rounded-[6px] flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium mb-2">Status</p>
                                <p className="text-accent-foreground text-xs">Definia se o usuário estará ativo ao ser adicionado.</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Switch />
                                <p className="text-sm font-medium">Ativo</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex items-center justify-end gap-3">
                        <Button type="reset" className="h-10 px-4 border rounded-full text-black">
                            Cancelar
                        </Button>
                        <Button type="submit" className="h-10 px-4 border rounded-full bg-primary">
                            Adicionar
                        </Button>
                    </div>
                </form>
            </SheetContent>
        </Sheet>

    )
}