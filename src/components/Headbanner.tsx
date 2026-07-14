export default function Headbanner() {
  return (
    <section className="bg-[linear-gradient(120deg,#0a37c5_0%,#1560c9_55%,#2ba7c4_100%)] py-20 text-white">
      <div className="container-x max-w-4xl text-center">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-cyan">Discover</p>
        <h2 className="mt-3 font-display text-4xl font-extrabold tracking-tight lg:text-5xl">Intelligence Layer</h2>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-relaxed text-white/85">
          We turn paper into working data. BitText reads Thai government documents, handwriting, tables, and financial
          records — converting scans and PDFs into structured, ready-to-use text with over 95% accuracy on official
          Thai documents. Built to handle mixed Thai–English content and deployable fully on-premise to meet the
          strictest data sovereignty requirements.
        </p>
      </div>
    </section>
  )
}
