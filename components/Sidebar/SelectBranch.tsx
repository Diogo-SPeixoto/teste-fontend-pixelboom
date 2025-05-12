import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger } from "../ui/select"

export const SelectBranch = () => {
    return (
            <Select>
                <SelectTrigger className="w-full p-2 flex items-center justify-between cursor-pointer border-none">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-[#F4F4F5] rounded-lg flex items-center justify-center text-[#102822] font-semibold">
                            FA
                        </div>
                        <p className="font-semibold text-sm">Filial A</p>
                    </div>
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="Filial A">Filial A</SelectItem>
                        <SelectItem value="Filial B">Filial B</SelectItem>
                        <SelectItem value="Filial C">Filial C</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
    )
}