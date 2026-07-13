import { differentiation } from '../data'

const accent = ['#0f42c6', '#3d2ea9', '#44bcd3']

function hexPoints(cx: number, cy: number, r: number) {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 3) * i - Math.PI / 6
    return `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`
  }).join(' ')
}

function Graphic({ n }: { n: string }) {
  if (n === '1')
    return (
      <div className="grid h-[150px] w-[190px] place-items-center rounded-md bg-brand-blue-dark">
        <span className="font-sans text-8xl font-black leading-none text-white">n</span>
      </div>
    )
  if (n === '2')
    return (
      <div className="grid h-[150px] w-[190px] grid-cols-2 place-items-center gap-3 rounded-md bg-brand-lilac">
        {[0, 1, 2, 3].map((i) => (
          <span key={i} className="grid h-11 w-11 place-items-center rounded-lg bg-white text-brand-blue shadow-sm">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              {i === 0 && <path d="M8 5v14l11-7z" />}
              {i === 1 && <path d="m9 16.2-3.5-3.5L4 14.2 9 19 20 8l-1.5-1.5z" />}
              {i === 2 && <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm8.9 4.9 1.1-1-1-1.7-1.4.4a6 6 0 00-1.3-.8L18 7h-2l-.3 1.4a6 6 0 00-1.3.8l-1.4-.4-1 1.7 1.1 1a6 6 0 000 1.5l-1.1 1 1 1.7 1.4-.4c.4.3.9.6 1.3.8L16 20h2l.3-1.4c.5-.2.9-.5 1.3-.8l1.4.4 1-1.7-1.1-1a6 6 0 000-1.6z" />}
              {i === 3 && <path d="M10 4a6 6 0 104 10.5l5 5L20.5 18l-5-5A6 6 0 0010 4zm0 2a4 4 0 110 8 4 4 0 010-8z" />}
            </svg>
          </span>
        ))}
      </div>
    )
  return (
    <div className="grid h-[150px] w-[190px] place-items-center rounded-md" style={{ background: '#dfe9fb' }}>
      <svg viewBox="0 0 130 110" className="h-28 w-32 text-brand-blue">
        {[
          [35, 22], [65, 22], [95, 22],
          [20, 48], [50, 48], [80, 48], [110, 48],
          [35, 74], [65, 74], [95, 74],
        ].map(([cx, cy], i) => (
          <polygon key={i} points={hexPoints(cx, cy, 15)} fill={i === 5 ? '#0f42c6' : 'none'} stroke="#0f42c6" strokeWidth="2" />
        ))}
        <path d="M111 46v-2a4 4 0 00-8 0v2h-1.5v7h11v-7z" fill="#fff" />
        <circle cx="107" cy="50" r="1.3" fill="#0f42c6" />
      </svg>
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
                <span className="font-sans text-8xl font-black leading-[0.8]" style={{ color: accent[i] }}>
                  {d.n}
                </span>
                <div className="pt-2">
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
