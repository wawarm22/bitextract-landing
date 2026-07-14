export default function ProductCard() {
  return (
    <section className="bg-[#eef3fb] py-20">
      <div className="container-x text-center">
        {/* pixel/retro heading — old ThinkBit banner style */}
        <h2 className="font-pixel font-bold uppercase leading-[1.3] text-[#0d0e42] text-[16px] sm:text-[24px] lg:text-[38px]">
          BITTEXT — OCR &amp; DOCUMENT INTELLIGENCE
        </h2>
        <p className="mx-auto mt-10 max-w-4xl text-lg leading-relaxed text-slate-text">
          <strong className="text-ink">BitText</strong> converts paper documents and PDFs into usable, structured
          text — reading official Thai documents, handwriting, tables, and financial records with{' '}
          <strong className="text-ink">over 95% accuracy</strong>. It extracts standard fields into JSON automatically,
          supports <strong className="text-ink">mixed Thai–English content</strong>, and deploys{' '}
          <strong className="text-ink">fully on-premise</strong> to comply with data sovereignty policies.
        </p>
      </div>
    </section>
  )
}
