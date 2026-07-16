import { differentiation } from '../data'

const accent = ['#0f42c6', '#3d2ea9', '#44bcd3']
const descMaxW = ['max-w-[320px]', 'max-w-[320px]', 'max-w-[320px]']
const stagger = ['md:mt-0', 'md:mt-[90px]', 'md:mt-[180px]']

function Graphic({ n, i }: { n: string; i: number }) {
  // Width follows descMaxW[i] so the graphic always matches the description width
  // Block 1 (Mastery): exact Figma SVG (blue box + white "n" + grid)
  if (n === '1')
    return <img src="/assets/diff-mastery.svg" alt="Thai context mastery" className={`w-full ${descMaxW[i]} h-[200px] object-cover rounded-md`} />
  // Block 2 (Connectivity): light box (#CFD9F4) + exact Figma icon cluster
  if (n === '2')
    return (
      <div className={`grid h-[200px] w-full ${descMaxW[i]} place-items-center rounded-md`} style={{ background: '#CFD9F4' }}>
        <img src="/assets/diff-connectivity.svg" alt="Hybrid connectivity" className="h-[128px] w-auto" />
      </div>
    )
  // Block 3 (Compliance): exact Figma honeycomb SVG, no box
  return (
    <img src="/assets/diff-compliance.svg" alt="Proactive compliance" className={`w-full ${descMaxW[i]} h-[200px] object-cover rounded-md`} />
  )
}

export default function Differentiation() {
  return (
    <section className="bg-white py-16">
      <div className="container-x">
        {/* diagonal staggered blocks */}
        <div className="relative grid gap-8 sm:grid-cols-2 md:grid-cols-3">
          {differentiation.map((d, i) => (
            <article key={d.n} className={`max-w-[325px] mx-auto sm:mx-0 ${stagger[i]}`}>
              <div className="flex items-start gap-3">
                <span className="font-sans text-8xl font-black leading-[0.8]" style={{ color: accent[i], opacity: 0.35 }}>
                  {d.n}
                </span>
                {/* nudge tag/title: adjust bottom (↕) and left (↔) */}
                <div className="relative" style={{ bottom: '-35px', left: '0px' }}>
                  <p className="text-lg font-bold uppercase leading-tight" style={{ color: accent[i] }}>{d.tag}</p>
                  <p className="text-lg font-bold uppercase leading-tight" style={{ color: accent[i] }}>{d.title}</p>
                </div>
              </div>
              <div className="mt-4">
                <Graphic n={d.n} i={i} />
              </div>
              <p className={`mt-4 text-xs leading-relaxed text-ink ${descMaxW[i]}`}>{d.desc}</p>
            </article>
          ))}

          {/* label — aligned to bottom of last block */}
          <div className="absolute top-0 right-5 text-right hidden md:block">
            <p className="text-lg font-bold uppercase tracking-wide text-ink">Differentiation Points</p>
            <p className="text-sm text-ink">
              The <img src="/assets/thinkbit-logo.png" alt="ThinkBit" className="inline-block me-1 h-5 align-middle relative bottom-[2px]" /> Advantage
            </p>
          </div>

          {/* label — mobile (shown above on small screens) */}
          <div className="text-right md:hidden sm:col-span-2 order-first">
            <p className="text-lg font-bold uppercase tracking-wide text-ink">Differentiation Points</p>
            <p className="text-sm text-ink">
              The <img src="/assets/thinkbit-logo.png" alt="ThinkBit" className="inline-block me-1 h-5 align-middle relative bottom-[2px]" /> Advantage
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
