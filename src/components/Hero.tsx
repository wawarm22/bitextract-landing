export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-blue pt-24">
      {/* faint vertical watermark words */}
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <div className="absolute left-4 top-48 space-y-6 font-display text-6xl font-extrabold uppercase leading-none tracking-tight text-white/10 lg:text-7xl">
          <p>Connectivity</p>
          <p>Management</p>
          <p>Customization</p>
          <p>Document</p>
        </div>
      </div>

      <div className="container-x relative">
        <div className="max-w-xl pt-6">
          <h1 className="font-display text-6xl font-extrabold leading-none tracking-tight text-ink lg:text-7xl">
            BIT<span className="text-brand-blue">TEXT</span>
          </h1>
          <p className="mt-3 text-2xl font-semibold text-ink lg:text-3xl">The Enterprise-Grade</p>
          <p className="mt-1 text-sm text-slate-soft">Intelligence Document Processing Platform.</p>
        </div>

        <div className="relative flex justify-center">
          <img
            src="/assets/hero-ai.webp"
            alt="AI document extraction — laptop processing documents"
            className="w-full max-w-2xl drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
