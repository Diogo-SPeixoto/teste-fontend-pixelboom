"use client"
import React, { useState } from "react";
import { StatCard } from "../components/Users/StatCard";
import { SearchBar } from "../components/Users/SearchBar";
import { UserCard } from "../components/Users/UserCard";
import { FooterUsers } from "@/components/Users/FooterUsers";
import { CreateUser } from "@/components/Users/CreateUser";
import { notoSerif } from "@/assets/font";

// Mock data for users
const mockUsers = [
  {
    id: 1,
    initials: "JG",
    name: "José Ricardo Gomes",
    age: "51",
    gender: "Homem",
    date: "22/03/2025 - 10:21am",
    sessionTime: "38m22s",
    userType: "Usuário padrão",
    isActive: true,
  },
  {
    id: 2,
    initials: "HS",
    name: "Helena Soares",
    age: "46",
    gender: "Mulher",
    date: "22/03/2025 - 10:21am",
    sessionTime: "38m22s",
    userType: "Usuário padrão",
    isActive: false,
  },
  {
    id: 3,
    initials: "DS",
    name: "Débora Santana",
    age: "24",
    gender: "Mulher",
    date: "22/03/2025 - 10:21am",
    sessionTime: "38m22s",
    userType: "Usuário padrão",
    isActive: false,
  },
  {
    id: 4,
    initials: "LS",
    name: "Lucas Rocha Silveira",
    age: "31",
    gender: "Homem",
    date: "22/03/2025 - 10:21am",
    sessionTime: "38m22s",
    userType: "Usuário padrão",
    isActive: true,
  },
  {
    id: 5,
    initials: "SA",
    name: "Sérgio Arantes",
    age: "36",
    gender: "Homem",
    date: "22/03/2025 - 10:21am",
    sessionTime: "38m22s",
    userType: "Usuário padrão",
    isActive: true,
  },
  {
    id: 6,
    initials: "AC",
    name: "Adriano Costa",
    age: "38",
    gender: "Homem",
    date: "22/03/2025 - 10:21am",
    sessionTime: "38m22s",
    userType: "Usuário padrão",
    isActive: true,
  },
];

const Users = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);

  // Filter users based on search query
  const filteredUsers = mockUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.age.includes(searchQuery) ||
      user.gender.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalUsers = 294;
  const activeUsers = 203;
  const inactiveUsers = 127;
  const averageSessionTime = "31m 20s";
  const totalPages = Math.ceil(totalUsers / itemsPerPage);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleItemsPerPageChange = (items: number) => {
    setItemsPerPage(items);
    setCurrentPage(1);
  };

  return (
    <main className="w-full h-full p-10 flex flex-col gap-5 overflow-auto">
      <div className="flex items-center justify-between pb-6">
        <h1 className={`text-3xl ${notoSerif.className}`}>Usuários</h1>
        <CreateUser />
      </div>

      <section className="flex items-center justify-start gap-5">
        <div className="w-full max-w-[225px]">
          <StatCard title="Usuários" value={totalUsers.toString()} />
        </div>
        <div className="w-full max-w-[225px]">
          <StatCard title="Tempo de sessão" value={averageSessionTime} />
        </div>
        <div className="w-full max-w-[225px]">
          <StatCard title="Ativos" value={activeUsers.toString()} />
        </div>
        <div className="w-full max-w-[225px]">
          <StatCard title="Inativos" value={inactiveUsers.toString()} />
        </div>
      </section>

      <SearchBar onSearch={handleSearch} />

      <section className="w-full max-md:max-w-full">
        <ul className="flex flex-col gap-2">
          {filteredUsers.map((user, index) => (
            <UserCard
              key={user.id}
              initials={user.initials}
              name={user.name}
              age={user.age}
              gender={user.gender}
              date={user.date}
              sessionTime={user.sessionTime}
              userType={user.userType}
              isActive={user.isActive}
            />
        ))}
        </ul>
      </section>
      
      <FooterUsers
        currentPage={currentPage}
        totalPages={totalPages}
        totalItems={totalUsers}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        onItemsPerPageChange={handleItemsPerPageChange}
      />
    </main>

  );
};

export default Users;
