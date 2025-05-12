import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "../ui/select";


interface FooterUsersProps {
  totalPages: number;
  totalItems: number;
}

export const FooterUsers: React.FC<FooterUsersProps> = ({
}) => {

  return (
    <div className="flex w-full gap-5 justify-between">
      <p
        className="text-zinc-500 text-ellipsis text-sm font-normal leading-none my-auto"
      >
        5 de 294 itens
      </p>
      <Pagination>
        <PaginationContent className="p-1">
          <PaginationItem>
            <PaginationPrevious className="opacity-50" title="Anterior" href="#" />
          </PaginationItem>
          <PaginationItem className="flex items-center gap-1">
            <PaginationLink isActive  href="#">1</PaginationLink>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem className="flex">
            <PaginationEllipsis />
            <PaginationLink href="#">58</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationNext title="Próxima" href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <div className="flex items-stretch gap-2 text-sm font-normal tracking-[-0.4px] leading-none">
        <div
          className="text-zinc-500 text-ellipsis font-normal grow my-auto"
        >
          Itens por página
        </div>
        <Select>
          <SelectTrigger iconSecondary={true} className="w-[70px]">
            <SelectValue placeholder="10" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem  value="10">20</SelectItem>
              <SelectItem value="20">20</SelectItem>
              <SelectItem value="30">30</SelectItem>
              <SelectItem value="40">40</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};
