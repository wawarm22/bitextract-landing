import { capabilities, performance, secureData } from '../data'

export default function CoreFeatures() {
  return (
    <section id="features" className="bg-navy-deep">
      {/* banner */}
      <div className="container-x pt-16">
        <p className="mb-5 font-bold tracking-[0.2em] text-xs uppercase text-white">Core Features</p>
        <img src="/assets/hero-docs.webp" alt="Document intelligence" className="h-56 w-full rounded-xl object-cover lg:h-72" />
      </div>

      {/* Advanced Document Intelligence — white card */}
      <div className="container-x -mt-2 pb-10">
        <div className="rounded-xl bg-white p-8 lg:p-10">
          <h3 className="text-sm font-bold uppercase tracking-wide text-brand-blue">
            Advanced Document Intelligence
          </h3>
          <div className="mt-6 grid gap-8 md:grid-cols-3">
            {capabilities.map((c) => (
              <div key={c.title}>
                <h4 className="font-semibold text-ink">{c.title}</h4>
                <p className="mt-2 text-xs leading-relaxed text-slate-soft">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* two feature images */}
      <div className="container-x grid gap-6 pb-8 md:grid-cols-2">
        <img src="/assets/feat-brain.webp" alt="Neural processing" className="h-52 w-full rounded-xl object-cover" />
        <img src="/assets/feat-vault.webp" alt="Secure data vault" className="h-52 w-full rounded-xl object-cover" />
      </div>

      {/* two blue cards */}
      <div className="container-x grid gap-6 pb-20 md:grid-cols-2">
        <article className="rounded-xl bg-card-blue p-8 text-white">
          <h3 className="text-sm font-bold uppercase tracking-wide">High-Performance Processing</h3>
          <ul className="mt-6 space-y-5">
            {performance.map((p) => (
              <li key={p.title}>
                <h4 className="font-semibold">{p.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-white/70">{p.desc}</p>
              </li>
            ))}
          </ul>
        </article>
        <article className="rounded-xl bg-card-blue p-8 text-white">
          <h3 className="text-sm font-bold uppercase tracking-wide">Secure Data Management &amp; Storage</h3>
          <ul className="mt-6 space-y-5">
            {secureData.map((s) => (
              <li key={s.title}>
                <h4 className="font-semibold">{s.title}</h4>
                <p className="mt-1 text-xs leading-relaxed text-white/70">{s.desc}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}
