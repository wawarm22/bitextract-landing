export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="container-x flex h-16 items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-display text-sm font-extrabold tracking-tight text-ink">
            BIT<span className="text-brand-blue">EXTRACT</span>-AI
          </span>
          <span className="h-4 w-px bg-slate-300" />
          <span className="flex items-center gap-1 text-sm font-bold text-ink">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-brand-blue" fill="currentColor">
              <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z" />
            </svg>
            THINKBIT
          </span>
        </div>
        <a href="#cta" className="hidden rounded-md bg-brand-blue px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-brand-blue-dark md:inline-block">
          Get started
        </a>
      </div>
    </header>
  )
}
