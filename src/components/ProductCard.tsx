export default function ProductCard() {
  return (
    <section className="bg-white py-20">
      <div className="container-x max-w-5xl">
        <article className="grid items-center gap-8 rounded-2xl border border-slate-100 bg-white p-8 shadow-sm lg:grid-cols-[1.4fr_1fr] lg:p-12">
          <div>
            <span className="inline-block rounded-full bg-brand-blue/10 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-wider text-brand-blue">
              Product
            </span>
            <h3 className="mt-4 font-display text-2xl font-bold text-ink lg:text-3xl">
              BitText — <span className="text-brand-blue">OCR &amp; Document Intelligence</span>
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-text">
              BitText converts paper documents and PDFs into usable, structured text — reading official Thai documents,
              handwriting, tables, and financial records with over 95% accuracy. It extracts standard fields into JSON
              automatically, supports mixed Thai–English content, and deploys fully on-premise to comply with data
              sovereignty policies.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-brand-blue">
              {['95%+ accuracy', 'Thai + English', 'JSON extraction', 'On-premise'].map((t) => (
                <li key={t} className="rounded-md bg-brand-blue/5 px-3 py-1.5">{t}</li>
              ))}
            </ul>
          </div>
          <img
            src="/assets/hero-ai.webp"
            alt="BitText OCR document intelligence"
            className="mx-auto w-full max-w-xs"
          />
        </article>
      </div>
    </section>
  )
}
