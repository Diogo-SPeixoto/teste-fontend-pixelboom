import { ChevronDown } from "lucide-react";
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


interface FooterUsersProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (itemsPerPage: number) => void;
  className?: string;
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
        <div
          className="text-zinc-900 whitespace-nowrap gap-2"
        >
          <div
            className="justify-between items-center border border-[--background] flex min-h-10 w-full overflow-hidden h-10 pr-3 pl-3 bg-[#FFF] py-2 rounded-md border-solid"
          >
            <select
              className="text-zinc-900 text-ellipsis font-normal self-stretch flex-1 shrink basis-[0%] my-auto bg-transparent border-none outline-none appearance-none"
              value={10}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            <ChevronDown width={16} height={16} />
          </div>
        </div>
      </div>
    </div>
  );
};
