import { differentiation } from '../data'

const accent = ['#0f42c6', '#3d2ea9', '#44bcd3']

function Graphic({ n }: { n: string }) {
  // Block 1 (Mastery): exact Figma SVG (blue box + white "n" + grid)
  if (n === '1')
    return <img src="/assets/diff-mastery.svg" alt="Thai context mastery" className="w-[190px] rounded-md" />
  // Block 2 (Connectivity): light box (#CFD9F4) + exact Figma icon cluster
  if (n === '2')
    return (
      <div className="grid h-[150px] w-[190px] place-items-center rounded-md" style={{ background: '#CFD9F4' }}>
        <img src="/assets/diff-connectivity.svg" alt="Hybrid connectivity" className="h-[128px] w-auto" />
      </div>
    )
  // Block 3 (Compliance): exact Figma honeycomb SVG on a light box
  return (
    <div className="grid h-[150px] w-[190px] place-items-center rounded-md px-4" style={{ background: '#dfe9fb' }}>
      <img src="/assets/diff-compliance.svg" alt="Proactive compliance" className="w-full" />
    </div>
  )
}

export default function Differentiation() {
  return (
    <section className="bg-white py-16">
      <div className="container-x">
        <div className="mb-6 text-right">
          <p className="text-lg font-bold uppercase tracking-wide text-ink">Differentiation Points</p>
          <p className="text-sm text-ink">
            The <span className="font-bold text-brand-blue">ThinkBit</span> Advantage
          </p>
        </div>

        {/* diagonal staggered blocks */}
        <div className="grid gap-8 md:grid-cols-3">
          {differentiation.map((d, i) => (
            <article key={d.n} className="max-w-xs" style={{ marginTop: `${i * 40}px` }}>
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
                <Graphic n={d.n} />
              </div>
              <p className="mt-4 text-[11px] leading-relaxed text-ink">{d.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
