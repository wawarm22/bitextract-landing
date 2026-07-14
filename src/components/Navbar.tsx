// ThinkBit site header — matched to the live site (Astra theme).
// Values from the live site: header 88px, white bg, nav 15px / weight 400 / #4b4f58, system font.
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
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white shadow-[0_2px_10px_rgba(13,14,66,0.08)]">
      <div className="container-x flex h-[88px] items-center justify-between">
        {/* logo — save the real file to public/assets/thinkbit-logo.png */}
        <a href="https://www.think-bit.org/" className="flex items-center">
          <img
            src="/assets/thinkbit-logo.png"
            width={199}
            height={57}
            alt="Think Bit Company Limited"
            className="h-[46px] w-auto"
          />
        </a>

        <nav className="hidden items-center gap-9 md:flex" style={{ fontFamily: SYS_FONT }}>
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
      </div>
    </header>
  )
}
