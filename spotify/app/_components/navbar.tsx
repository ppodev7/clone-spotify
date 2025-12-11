export function Navbar() {
    return (
        <nav className="w-full flex flex-row items-center gap-4">
            <img src="/logo.png" alt="logo_spotify" className="w-9" />

            <div className="mx-auto flex w-96 items-center gap-2 bg-zinc-800 px-4 py-2.5 rounded-4xl shadow-sm">
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
        </nav>
    )
}