"use client"
import { ListFilter, Search } from "lucide-react";
import React, { useState } from "react";

interface SearchBarProps {
  onSearch?: (query: string) => void;
  className?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch, className }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <div className={`flex w-full items-stretch gap-3 ${className}`}>
      <div
        className=" border border-[--background] flex items-center min-h-10 w-full gap-1 overflow-hidden flex-wrap h-10 px-3 bg-[#FFF] py-2 rounded-md border-solid max-md:max-w-full"
      >
        <Search width={16} height={16} />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Buscar..."
          className="text-sm text-[--accent-foreground] placeholder:text-[--accent-foreground] flex-1 text-ellipsis font-normal bg-transparent border-none outline-none"
        />
      </div>
      <button
        className="flex justify-center items-center border border-[--background] size-10 rounded-full"
        aria-label="Filter"
      >
        <ListFilter width={16} height={16} />
      </button>

    </div>
  );
};
