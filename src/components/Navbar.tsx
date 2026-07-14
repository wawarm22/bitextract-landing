import { useState } from 'react'

// ThinkBit site header — matched to the live site (Astra theme).
// Desktop menu ≥922px; below that a hamburger toggle opens a stacked mobile menu.
const nav = [
  { label: 'HOME', href: 'https://www.think-bit.org/' },
  { label: 'SERVICE', href: 'https://www.think-bit.org/service/' },
  { label: 'PRODUCT', href: '#', active: true },
  { label: 'CONTACT', href: 'https://www.think-bit.org/contact/' },
  { label: 'CAREER', href: 'https://www.think-bit.org/information-technology-career/' },
]

const SYS_FONT =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-[0_2px_10px_rgba(13,14,66,0.08)]">
      <div className="container-x flex h-[88px] items-center justify-between">
        {/* logo */}
        <a href="https://www.think-bit.org/" className="flex items-center">
          <img src="/assets/thinkbit-logo.png" width={199} height={57} alt="Think Bit Company Limited" className="h-[46px] w-auto" />
        </a>

        {/* desktop nav (≥922px) */}
        <nav className="hidden items-center gap-9 min-[922px]:flex" style={{ fontFamily: SYS_FONT }}>
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="text-[15px] font-normal transition-colors hover:text-[#2f6bf2]"
              style={{ color: n.active ? '#2f6bf2' : '#4b4f58' }}
            >
              {n.label}
            </a>
          ))}
        </nav>

        {/* hamburger / close (<922px) */}
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-label="Main Menu"
          aria-expanded={open}
          className="text-[#2f6bf2] min-[922px]:hidden"
        >
          {open ? (
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {/* mobile stacked menu */}
      {open && (
        <nav className="border-t border-slate-100 bg-white min-[922px]:hidden" style={{ fontFamily: SYS_FONT }}>
          {nav.map((n) => (
            <a
              key={n.label}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-slate-100 px-6 py-4 text-[15px] transition-colors hover:bg-slate-50"
              style={{ color: n.active ? '#2f6bf2' : '#4b4f58' }}
            >
              {n.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}
