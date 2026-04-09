import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-canvas/80 backdrop-blur-md border-b border-faint/20">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between relative">
        {/* Architectural Grid Lines */}
        <div className="absolute left-0 top-0 h-full w-[1px] bg-faint/10" />
        <div className="absolute right-0 top-0 h-full w-[1px] bg-faint/10" />

        <div className="flex items-center gap-4">
          <Logo className="h-24 w-auto" />
          <div className="h-6 w-[1px] bg-faint/30 hidden sm:block" />
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#" className="label-caps text-ink-2 hover:text-primary transition-colors">Publishers</a>
          <a href="#" className="label-caps text-ink-2 hover:text-primary transition-colors">Advertisers</a>
          <a href="#" className="label-caps text-ink-2 hover:text-primary transition-colors">Network</a>
        </div>

        <div className="flex items-center gap-6">
          <button className="text-[10px] font-bold uppercase tracking-widest text-ink-2 hover:text-ink transition-colors">Login</button>
          <button className="btn-primary py-2 px-6 text-[10px] uppercase tracking-widest">Connect Node</button>
        </div>
      </div>
    </nav>
  );
}
