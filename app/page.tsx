import { Header } from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import Users from "@/pages/Users";

export default function Home() {
  return (
    <div className="min-h-screen bg-white grid grid-cols-[240px_1fr]">
      <Sidebar />
      <div className='h-screen grid grid-rows-[72px_1fr]'>
        <Header />
        <Users />
      </div>
      
    </div>
  );
}
