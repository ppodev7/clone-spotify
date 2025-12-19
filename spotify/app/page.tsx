import { SideBar } from "./_components/sideBar";
import { Navbar } from "./_components/navbar";
import { Play } from 'lucide-react';

export default function Home() {
  return (

    <div className="h-screen flex flex-col bg-black">

      <div className="h-14 p-6 flex items-center bg-black">
        <Navbar />
      </div>



      <div className="flex flex-1 p-2 gap-2">
        <SideBar />
        <main className="flex-1 p-6 rounded-lg bg-linear-to-b from-zinc-800 via-zinc-900 to-black">
          <nav className="flex">
            <div className="flex gap-2 font-semibold p-2 px-8">
              <button className="bg-white px-3 py-1 rounded-4xl text-zinc-900">
                Tudo
              </button>

              <button className="bg-zinc-700 px-3 py-1 rounded-4xl hover:bg-zinc-600 transition-colors">
                Músicas
              </button>

              <button className="bg-zinc-700 px-3 py-1 rounded-4xl hover:bg-zinc-600 transition-colors">
                Podcasts
              </button>
            </div>

          </nav>

          <div className="grid grid-cols-4 gap-4 mt-4 px-8">
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="album.jpg" width={64} height={64} alt="Playlist" />
              <strong>Música 1</strong>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-4 opacity-0 group-hover:opacity-100 transition-all">
                <Play fill='black' />
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="album2.jpg" width={64} height={64} alt="Playlist" />
              <strong>Música 2</strong>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-4 opacity-0 group-hover:opacity-100 transition-all">
                <Play fill='black' />
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="album3.jpg" width={64} height={64} alt="Playlist" />
              <strong>Música 3</strong>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-4 opacity-0 group-hover:opacity-100 transition-all">
                <Play fill='black' />
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="album4.jpg" width={64} height={64} alt="Playlist" />
              <strong>Música 4</strong>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-4 opacity-0 group-hover:opacity-100 transition-all">
                <Play fill='black' />
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="album5.jpg" width={64} height={64} alt="Playlist" />
              <strong>Música 5</strong>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-4 opacity-0 group-hover:opacity-100 transition-all">
                <Play fill='black' />
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="album6.jpg" width={64} height={64} alt="Playlist" />
              <strong>Música 6</strong>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-4 opacity-0 group-hover:opacity-100 transition-all">
                <Play fill='black' />
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="album7.jpg" width={64} height={64} alt="Playlist" />
              <strong>Música 7</strong>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-4 opacity-0 group-hover:opacity-100 transition-all">
                <Play fill='black' />
              </button>
            </a>
            <a href="#" className="bg-white/5 group rounded flex items-center gap-4 overflow-hidden hover:bg-white/10 transition-colors">
              <img src="album8.jpg" width={64} height={64} alt="Playlist" />
              <strong>Música 8</strong>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green-400 text-black ml-auto mr-4 opacity-0 group-hover:opacity-100 transition-all">
                <Play fill='black' />
              </button>
            </a>
          </div>



          <div className="flex py-8 font-semibold text-2xl mt-20">
            Tocados Recentemente
          </div>

          <div className="flex gap-4">
            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="main/frank.jpg" alt="Frank Ocean" className="w-full" />
              <strong className="font-semibold">Blonde</strong>
              <span className="text-sm text-zinc-400">Frank Ocean</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="main/nwa.jpg" alt="NWA" className="w-full" />
              <strong className="font-semibold">NWA</strong>
              <span className="text-sm text-zinc-400">NWA</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="main/sepultura.jpg" alt="Sepultura" className="w-full" />
              <strong className="font-semibold">Sepultura</strong>
              <span className="text-sm text-zinc-400">Sepultura</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="main/snot.jpg" alt="Snot" className="w-full" />
              <strong className="font-semibold">Snot</strong>
              <span className="text-sm text-zinc-400">Snot</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="main/slipknot.jpg" alt="Slipknot" className="w-full" />
              <strong className="font-semibold">Slipknot</strong>
              <span className="text-sm text-zinc-400">Slipknot</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="main/beatles.jpg" alt="Beatles" className="w-full" />
              <strong className="font-semibold">Beatles</strong>
              <span className="text-sm text-zinc-400">The Beatles</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="main/joji.jpg" alt="Joji" className="w-full" />
              <strong className="font-semibold">Joji</strong>
              <span className="text-sm text-zinc-400">Joji</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="main/carti.jpg" alt="Playboi Carti" className="w-full" />
              <strong className="font-semibold">Playboi Carti</strong>
              <span className="text-sm text-zinc-400">Playboi Carti</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="main/sinatra.jpg" alt="Playboi Carti" className="w-full" />
              <strong className="font-semibold">Frank Sinatra</strong>
              <span className="text-sm text-zinc-400">Frank Sinatra</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

          </div>

          <div className="flex py-8 font-semibold text-2xl mt-20">
            Suas músicas estão com saudades
          </div>

          <div className="flex gap-4">
            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="main/sombr.jpg" alt="Sombr" className="w-full" />
              <strong className="font-semibold">Sombr</strong>
              <span className="text-sm text-zinc-400">Sombr</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="main/brandao.jpg" alt="Brandao" className="w-full" />
              <strong className="font-semibold">Brandao</strong>
              <span className="text-sm text-zinc-400">Brandao</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="main/fazo.jpg" alt="yung fazo" className="w-full" />
              <strong className="font-semibold">yung fazo</strong>
              <span className="text-sm text-zinc-400">yung fazo</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="main/mac.jpg" alt="MacDemarco" className="w-full" />
              <strong className="font-semibold">MacDemarco</strong>
              <span className="text-sm text-zinc-400">MacDemarco</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="/album5.jpg" alt="Aphex Twin" className="w-full" />
              <strong className="font-semibold">Aphex Twin</strong>
              <span className="text-sm text-zinc-400">Aphex Twin</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="/album4.jpg" alt="Matue" className="w-full" />
              <strong className="font-semibold">Matuê</strong>
              <span className="text-sm text-zinc-400">Matuê</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="/album2.jpg" alt="Joji" className="w-full" />
              <strong className="font-semibold">Nirvana</strong>
              <span className="text-sm text-zinc-400">Nirvana</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="main/slipknot.jpg" alt="Playboi Carti" className="w-full" />
              <strong className="font-semibold">Slipknot</strong>
              <span className="text-sm text-zinc-400">Slipknot</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

            <a href="#" className="bg-zinc-900 group relative w-40 p-3 rounded-md flex flex-col gap-2 hover:bg-zinc-800 transition-colors">
              <img src="/album8.jpg" alt="Playboi Carti" className="w-full" />
              <strong className="font-semibold">Travis Scott</strong>
              <span className="text-sm text-zinc-400">Travis Scott</span>
              <button className="w-12 h-12 flex items-center justify-center pl-1 rounded-full bg-green-500 text-black absolute bottom-16 right-4 opacity-0 group-hover:opacity-100 transition-all hover:scale-105 shadow-lg">
                <Play fill='black' />
              </button>
            </a>

          </div>


        </main>
      </div>
    </div>
  )
}