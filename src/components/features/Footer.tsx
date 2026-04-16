import { Heart } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 text-center border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950">
      <div className="container mx-auto px-6">
        <a href="#" className="inline-flex items-center gap-2 mb-6 opacity-80 hover:opacity-100 transition-opacity">
          <span className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
            Sindu Arta
          </span>
        </a>
        <div className="flex justify-center items-center gap-1.5 text-zinc-500 dark:text-zinc-400 mb-6 text-sm font-medium">
          <span>Dibuat dengan</span>
          <Heart size={14} className="text-rose-500 fill-rose-500 mx-0.5" />
          <span>oleh Sindu Arta</span>
        </div>
        <p className="text-xs text-zinc-400 dark:text-zinc-500">
          &copy; {new Date().getFullYear()} Sindu Arta. Hak Cipta Dilindungi.
        </p>
      </div>
    </footer>
  );
}
