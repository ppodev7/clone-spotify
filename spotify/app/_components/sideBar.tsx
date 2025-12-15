import { Plus } from 'lucide-react'
import { Search } from 'lucide-react'
import { List } from 'lucide-react'

export function SideBar() {
  return (
    <aside className="w-96 bg-zinc-900 p-6 rounded-lg items-center">
      <nav className="space-y-5">
        <div className="flex items-center justify-between">
          <a href="" className="font-semibold text-zinc-100">
            Sua Biblioteca
          </a>
          <button className="flex items-center gap-2 text-sm font-semibold bg-zinc-800 px-4 rounded-4xl p-2 text-zinc-200 hover:text-zinc-100">
            <Plus />
            Criar
          </button>
        </div>

        <div className='flex items-center gap-4 text-sm font-semibold '>
          <button className='bg-zinc-700 p-2 rounded-4xl px-3'>
            Playlists
          </button>

          <button className='bg-zinc-700 p-2 rounded-4xl px-3'>
            Artistas
          </button>

          <button className='bg-zinc-700 p-2 rounded-4xl px-3'>
            Álbuns
          </button>
        </div>

        <div className='flex items-center justify-between'>
          <Search className='w-5 h-5 text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors'/>
          <div className='flex items-center gap-2'>
            <span className='text-sm font-semibold text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors'>Recentes</span>
            <List className='w-5 h-5 text-zinc-400 hover:text-zinc-100 cursor-pointer transition-colors'/>
          </div>
        </div>
      </nav>
    </aside>
  )
}