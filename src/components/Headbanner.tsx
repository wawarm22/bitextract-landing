export default function Headbanner() {
  return (
    <section className="bg-white py-20">
      <div className="container-x text-center">
        {/* pixel/retro heading — old ThinkBit banner style */}
        <h2 className="font-pixel font-bold uppercase leading-[1.3] text-[#0d0e42] text-[18px] sm:text-[30px] lg:text-[45px]">
          DISCOVER INTELLIGENCE LAYER
        </h2>
        <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-slate-text">
          We turn paper into working data. <strong className="text-ink">BitText</strong> reads Thai government
          documents, handwriting, tables, and financial records — converting scans and PDFs into structured,
          ready-to-use text with <strong className="text-ink">over 95% accuracy</strong> on official Thai documents.
          Built to handle mixed Thai–English content and <strong className="text-ink">deployable fully on-premise</strong>{' '}
          to meet the strictest data sovereignty requirements.
        </p>
      </div>
    </section>
  )
}
