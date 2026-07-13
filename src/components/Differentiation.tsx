import { differentiation } from '../data'

function Graphic({ n }: { n: string }) {
  if (n === '1')
    return (
      <div className="grid h-28 w-28 place-items-center rounded-2xl bg-brand-blue">
        <span className="font-display text-6xl font-black text-white">n</span>
      </div>
    )
  if (n === '2')
    return (
      <div className="grid h-28 w-36 grid-cols-3 place-items-center gap-2">
        {[0, 1, 2, 3, 4].map((_, i) => (
          <span key={i} className="grid h-9 w-9 place-items-center rounded-lg bg-brand-blue/10 text-brand-blue">
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor">
              {i === 0 && <path d="M8 5v14l11-7z" />}
              {i === 1 && <path d="m9 16-5-5 1.5-1.5L9 13l9-9L19.5 5.5z" />}
              {i === 2 && <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm8 4-2 1 1 2-2 2-2-1-1 2h-4l-1-2-2 1-2-2 1-2-2-1v-4l2-1-1-2 2-2 2 1 1-2h4l1 2 2-1 2 2-1 2 2 1z" />}
              {i === 3 && <path d="M10 4a6 6 0 104.5 10l5 5 1.5-1.5-5-5A6 6 0 0010 4zm0 2a4 4 0 110 8 4 4 0 010-8z" />}
              {i === 4 && <path d="M4 12a4 4 0 014-4h8a4 4 0 010 8H8a4 4 0 01-4-4zm12 2a2 2 0 100-4 2 2 0 000 4z" />}
            </svg>
          </span>
        ))}
      </div>
    )
  return (
    <svg viewBox="0 0 120 110" className="h-28 w-32 text-brand-blue">
      {[
        [30, 20], [60, 20], [90, 20],
        [15, 46], [45, 46], [75, 46], [105, 46],
        [30, 72], [60, 72], [90, 72],
      ].map(([cx, cy], i) => (
        <polygon
          key={i}
          points={hexPoints(cx, cy, 15)}
          fill={i === 5 ? 'currentColor' : 'none'}
          stroke="currentColor"
          strokeWidth="2"
        />
      ))}
      <path d="M71 44v-2a4 4 0 00-8 0v2h-1v7h10v-7z" fill="white" stroke="white" strokeWidth="0.5" />
    </svg>
  )
}

function hexPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`
  }).join(' ')
}

export default function Differentiation() {
  return (
    <section className="bg-white py-20">
      <div className="container-x">
        <div className="mb-12 text-right">
          <p className="font-bold tracking-[0.2em] text-xs uppercase text-ink">Differentiation Points</p>
          <p className="text-sm text-slate-soft">
            The <span className="font-bold text-brand-blue">ThinkBit</span> Advantage
          </p>
        </div>
        <div className="grid gap-10 md:grid-cols-3">
          {differentiation.map((d) => (
            <article key={d.n} className="relative">
              <div className="mb-5 flex items-start gap-4">
                <span className="font-display text-6xl font-black text-slate-200">{d.n}</span>
                <div className="pt-2">
                  <p className="font-mono text-[11px] font-semibold tracking-[0.15em] text-brand-blue">{d.tag}</p>
                  <h3 className="text-xl font-bold text-ink">{d.title}</h3>
                </div>
              </div>
              <Graphic n={d.n} />
              <p className="mt-5 max-w-xs text-xs leading-relaxed text-slate-soft">{d.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
