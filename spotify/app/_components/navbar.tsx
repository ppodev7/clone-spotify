import { Home } from "lucide-react"
import { Bell } from "lucide-react"
import { Users } from "lucide-react"
import { UserRound } from "lucide-react"


export function Navbar() {
    return (
        <nav className="w-full flex items-center justify-between relative">

            <img src="/logo.png" alt="logo_spotify" className="w-9" />

            <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-4">
                <div className="flex items-center bg-zinc-800 p-3 rounded-full">
                    <Home />
                </div>

                <div className="flex w-96 items-center gap-2 bg-zinc-800 px-4 py-2.5 rounded-4xl shadow-sm">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="gray"
                        className="w-5 h-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1 0 5.5 5.5a7.5 7.5 0 0 0 11.15 11.15z"
                        />
                    </svg>

                    <input
                        type="text"
                        placeholder="O que você quer ouvir?"
                        className="w-full bg-transparent focus:outline-none text-zinc-200 placeholder-zinc-400"
                    />
                </div>
            </div>

            <div className="flex items-center gap-6">
                <Bell className="text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors" />
                <Users className="text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors" />
                <UserRound className="w-10 h-10 bg-zinc-600 p-2 rounded-full text-zinc-200 hover:bg-zinc-500 cursor-pointer transition-colors" />
            </div>

        </nav>
    )
}