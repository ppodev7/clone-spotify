import { Plus } from 'lucide-react'
import { Search } from 'lucide-react'
import { List } from 'lucide-react'

export function SideBar() {
  return (
    <aside className="w-96 bg-zinc-950 p-6 rounded-lg items-center">
      <nav className="space-y-5">
        <div className="flex items-center justify-between">
          <a href="" className="font-semibold text-zinc-100">
            Sua Biblioteca
          </a>
          <button className="flex items-center gap-2 text-sm font-semibold bg-zinc-800 px-4 rounded-4xl p-2 text-zinc-200 hover:bg-zinc-600 transition-colors">
            <Plus />
            Criar
          </button>
        </div>

        <div className='flex items-center gap-4 text-sm font-semibold '>
          <button className='bg-zinc-800 p-2 rounded-4xl px-3 hover:bg-zinc-600 transition-colors'>
            Playlists
          </button>

          <button className='bg-zinc-800 p-2 rounded-4xl px-3 hover:bg-zinc-600 transition-colors'>
            Artistas
          </button>

          <button className='bg-zinc-800 p-2 rounded-4xl px-3 hover:bg-zinc-600 transition-colors'>
            Álbuns
          </button>
        </div>

        <div className='flex items-center justify-between'>
          <Search className='w-5 h-5 text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors' />
          <div className='flex items-center gap-2'>
            <span className='text-sm font-semibold text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors'>Recentes</span>
            <List className='w-5 h-5 text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors' />
          </div>
        </div>



        <div className="mt-4 space-y-2">
          <div className="group flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors hover:bg-zinc-800">
            <img
              src="album.jpg"
              alt="Playlist 1"
              className="w-16 h-16 rounded-md object-cover"
            />
            <span className="text-sm font-semibold text-zinc-100 group-hover:text-zinc-300">
              Playlist 1
            </span>
          </div>

          <div className="group flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors hover:bg-zinc-800">
            <img
              src="album2.jpg"
              alt="Playlist 2"
              className="w-16 h-16 rounded-md object-cover"
            />
            <span className="text-sm font-semibold text-zinc-100 group-hover:text-zinc-300">
              Playlist 2
            </span>
          </div>

          <div className="group flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors hover:bg-zinc-800">
            <img
              src="album3.jpg"
              alt="Playlist 3"
              className="w-16 h-16 rounded-md object-cover"
            />
            <span className="text-sm font-semibold text-zinc-100 group-hover:text-zinc-300">
              Playlist 3
            </span>
          </div>

          <div className="group flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors hover:bg-zinc-800">
            <img
              src="album4.jpg"
              alt="Playlist 4"
              className="w-16 h-16 rounded-md object-cover"
            />
            <span className="text-sm font-semibold text-zinc-100 group-hover:text-zinc-300">
              Playlist 4
            </span>
          </div>

          <div className="group flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors hover:bg-zinc-800">
            <img
              src="album5.jpg"
              alt="Playlist 5"
              className="w-16 h-16 rounded-md object-cover"
            />
            <span className="text-sm font-semibold text-zinc-100 group-hover:text-zinc-300">
              Playlist 5
            </span>
          </div>

          <div className="group flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors hover:bg-zinc-800">
            <img
              src="album6.jpg"
              alt="Playlist 6"
              className="w-16 h-16 rounded-md object-cover"
            />
            <span className="text-sm font-semibold text-zinc-100 group-hover:text-zinc-300">
              Playlist 6
            </span>
          </div>

          <div className="group flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors hover:bg-zinc-800">
            <img
              src="album7.jpg"
              alt="Playlist 6"
              className="w-16 h-16 rounded-md object-cover"
            />
            <span className="text-sm font-semibold text-zinc-100 group-hover:text-zinc-300">
              Playlist 7
            </span>
          </div>

          <div className="group flex items-center gap-3 p-2 rounded-md cursor-pointer transition-colors hover:bg-zinc-800">
            <img
              src="album8.jpg"
              alt="Playlist 6"
              className="w-16 h-16 rounded-md object-cover"
            />
            <span className="text-sm font-semibold text-zinc-100 group-hover:text-zinc-300">
              Playlist 8
            </span>
          </div>

        </div>
      </nav>
    </aside>
  )
}