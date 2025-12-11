import { SideBar } from "./_components/sideBar";
import { Navbar } from "./_components/navbar";

export default function Home() {
  return (
    
    <div className="h-screen flex flex-col">
      
      <div className="h-14 bg-zinc-950 p-6 flex items-center">
        <Navbar />
      </div>
      
      
      
      <div className="flex flex-1 p-2 gap-2">
        <SideBar />
        <main className="flex-1 p-6 bg-zinc-900 rounded-lg">
          Main Content
        </main>
      </div>
    </div>
  )
}