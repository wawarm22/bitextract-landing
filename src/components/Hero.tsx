export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-blue">
      {/* faint giant watermark words */}
      <div aria-hidden className="pointer-events-none absolute inset-0 select-none overflow-hidden">
        <div className="absolute -left-2 top-40 flex flex-col gap-3 font-display text-7xl font-extrabold uppercase leading-[0.95] tracking-tight text-white/[0.13] lg:text-8xl">
          <span>Management</span>
          <span>Customization</span>
          <span>Document</span>
          <span>Transform</span>
        </div>
      </div>

      <div className="container-x relative pt-20">
        <div>
          <h1 className="font-display text-[64px] leading-none tracking-tight text-ink lg:text-[84px]">
            <span className="font-light">BIT</span>
            <span className="bg-gradient-to-r from-[#7ab6ea] via-[#2f6bf2] to-[#0a2f9e] bg-clip-text font-semibold text-transparent">
              TEXT
            </span>
          </h1>
          <p className="mt-3 text-3xl font-medium text-ink lg:text-[38px]">The Enterprise-Grade</p>
          <p className="mt-2 text-base font-normal text-gray1 lg:text-[20px]">Intelligence Document Processing Platform.</p>
        </div>

        <div className="relative -mt-8 flex justify-center pb-4">
          <img
            src="/assets/hero-ai.webp"
            alt="AI document extraction — laptop processing documents on a rock"
            className="w-full max-w-[620px] drop-shadow-2xl"
          />
        </div>
      </div>
    </section>
  )
}
