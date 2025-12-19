import {
    Play,
    SkipBack,
    SkipForward,
    Shuffle,
    Repeat,
    Volume2,
    CirclePlus,
    Heart,
    PictureInPicture,
    Maximize2
} from 'lucide-react';

export function Footer() {
    return (
        <footer className="w-full h-24 bg-black border-t border-zinc-800 px-4 flex-shrink-0">
            <div className="w-full h-full flex items-center justify-between gap-4">
                <section className="flex items-center gap-4 min-w-[180px] flex-shrink-0">
                    <img
                        src="/album4.jpg"
                        alt="Album atual"
                        className="w-14 h-14 rounded object-cover"
                    />
                    <div className="flex flex-col min-w-0">
                        <span className="text-sm font-medium text-white truncate">
                            Xtranho
                        </span>
                        <span className="text-xs text-zinc-400 truncate">
                            Matuê
                        </span>
                    </div>
                    <button
                        className="text-zinc-400 hover:text-white transition-colors p-1"
                        aria-label="Curtir música"
                    >
                        <CirclePlus size={16} />
                    </button>
                </section>

              
                <section className="flex flex-col items-center gap-2 flex-1 max-w-[722px]">
                    <div className="flex items-center gap-8">
                        <button
                            className="text-zinc-400 hover:text-white transition-colors"
                            aria-label="Embaralhar"
                        >
                            <Shuffle size={16} />
                        </button>
                        <button
                            className="text-zinc-400 hover:text-white transition-colors"
                            aria-label="Anterior"
                        >
                            <SkipBack size={20} fill="currentColor" />
                        </button>
                        <button
                            className="w-8 h-8 flex items-center justify-center rounded-full bg-white text-black hover:scale-105 transition-transform"
                            aria-label="Reproduzir/Pausar"
                        >
                            <Play size={16} fill="currentColor" />
                        </button>
                        <button
                            className="text-zinc-400 hover:text-white transition-colors"
                            aria-label="Próxima"
                        >
                            <SkipForward size={20} fill="currentColor" />
                        </button>
                        <button
                            className="text-zinc-400 hover:text-white transition-colors"
                            aria-label="Repetir"
                        >
                            <Repeat size={16} />
                        </button>
                    </div>
                    <div className="flex items-center gap-2 w-full">
                        <span className="text-xs text-zinc-400 min-w-[40px] text-right">0:00</span>
                        <div className="flex-1 h-1 bg-zinc-700 rounded-full group cursor-pointer">
                            <div className="h-full bg-white rounded-full w-0 group-hover:bg-green-500 transition-colors"></div>
                        </div>
                        <span className="text-xs text-zinc-400 min-w-[40px]">3:18</span>
                    </div>
                </section>

                
                <section className="flex items-center gap-2 min-w-[180px] justify-end flex-shrink-0">
                    <button
                        className="text-zinc-400 hover:text-white transition-colors"
                        aria-label="Picture in Picture"
                    >
                        <PictureInPicture size={16} />
                    </button>
                    <button
                        className="text-zinc-400 hover:text-white transition-colors"
                        aria-label="Tela cheia"
                    >
                        <Maximize2 size={16} />
                    </button>
                    <div className="flex items-center gap-2">
                        <button
                            className="text-zinc-400 hover:text-white transition-colors"
                            aria-label="Volume"
                        >
                            <Volume2 size={16} />
                        </button>
                        <div className="w-24 h-1 bg-zinc-700 rounded-full group cursor-pointer">
                            <div className="h-full bg-white rounded-full w-2/3 group-hover:bg-green-500 transition-colors"></div>
                        </div>
                    </div>
                </section>
            </div>
        </footer>
    );
}