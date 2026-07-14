import { capabilities, performance, secureData } from '../data'

export default function CoreFeatures() {
  return (
    <section
      id="features"
      className="py-14"
      style={{ background: 'linear-gradient(180deg, rgba(68,188,211,0) 24.26%, rgba(68,188,211,0.3) 48.74%, #0F41C2 85.44%, #072060 101.89%)' }}
    >
      <div className="container-x">
        {/* label + banner row */}
        <div className="flex items-start gap-6">
          <p className="w-32 shrink-0 pt-1 text-lg font-bold uppercase leading-tight tracking-wide text-ink">
            Core<br />Features
          </p>
          <img src="/assets/hero-docs.webp" alt="Document intelligence" className="h-40 flex-1 rounded-lg object-cover lg:h-48" />
        </div>

        {/* Advanced Document Intelligence — white card */}
        <div className="mt-6 rounded-lg bg-white p-7 shadow-sm lg:p-9">
          <h3 className="font-display text-xl font-bold text-brand-blue">ADVANCED DOCUMENT INTELLIGENCE</h3>
          <div className="mt-5 grid gap-[70px] md:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title}>
                <h4 className="text-sm font-bold text-gray1">{c.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-gray1 max-w-[340px]">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* two feature images */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <img src="/assets/feat-brain.webp" alt="Neural processing" className="h-44 w-full rounded-lg object-cover" />
          <img src="/assets/feat-vault.webp" alt="Secure data vault" className="h-44 w-full rounded-lg object-cover" />
        </div>

        {/* two white cards with colored headings */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <article className="rounded-lg bg-white p-7 shadow-sm">
            <h3 className="font-display text-lg font-bold text-brand-purple2">High-Performance Processing</h3>
            <ul className="mt-5 space-y-4">
              {performance.map((p) => (
                <li key={p.title}>
                  <h4 className="text-sm font-bold text-ink">{p.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-ink max-w-[400px]">{p.desc}</p>
                </li>
              ))}
            </ul>
          </article>
          <article className="rounded-lg bg-white p-7 shadow-sm">
            <h3 className="font-display text-lg font-bold text-brand-cyan">Secure Data Management &amp; Storage</h3>
            <ul className="mt-5 space-y-4">
              {secureData.map((s) => (
                <li key={s.title}>
                  <h4 className="text-sm font-bold text-ink">{s.title}</h4>
                  <p className="mt-1 text-xs leading-relaxed text-ink max-w-[360px]">{s.desc}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
