// Original ThinkBit site header, recreated. Menu now includes PRODUCT (below Service).
// NOTE: replace the logo mark below with the real ThinkBit logo asset (SVG/PNG) when available.
const nav = [
  { label: 'HOME', href: 'https://www.think-bit.org' },
  { label: 'SERVICE', href: 'https://www.think-bit.org/service' },
  { label: 'PRODUCT', href: '#', active: true },
  { label: 'CONTACT', href: 'https://www.think-bit.org/contact' },
  { label: 'CAREER', href: 'https://www.think-bit.org/career' },
]

function Logo() {
  return (
    <a href="https://www.think-bit.org" className="flex items-center gap-2.5">
      {/* placeholder gradient mark — swap for the real ThinkBit logo */}
      <span
        className="inline-block h-8 w-8 rounded-md"
        style={{ background: 'linear-gradient(135deg,#e0399a 0%,#7b3ff2 45%,#2f7bf2 100%)' }}
      />
      <span className="text-2xl font-extrabold tracking-tight">
        <span className="text-[#0d0e42]">THINK</span>
        <span className="text-slate-400">BIT</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white">
      <div className="container-x flex h-[70px] items-center justify-between">
        <Logo />
        <nav className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className={`text-sm font-semibold tracking-wide transition-colors hover:text-brand-blue ${
                n.active ? 'text-brand-blue' : 'text-[#0d0e42]'
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
