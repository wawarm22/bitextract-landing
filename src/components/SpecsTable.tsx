import { specs } from '../data'

export default function SpecsTable() {
  return (
    <section
      id="specs"
      className="pb-12"
      style={{ background: 'linear-gradient(180deg, rgba(68,188,211,0) 24.26%, rgba(68,188,211,0.3) 48.74%, #0F41C2 85.44%, #072060 101.89%)' }}
    >
      <div className="container-x">
        <p className="mb-5 text-lg font-bold text-ink sm:text-xl">TECHNICAL SPECIFICATIONS &amp; COMPLIANCE TABLE</p>
        <div className="md:rounded-md md:bg-white md:p-6 md:shadow-sm md:ring-1 md:ring-slate-100">
          {/* Desktop / tablet: real table (md and up) */}
          <table className="hidden w-full text-left text-sm md:table">
            <thead>
              <tr className="border-b-2 border-slate-200 text-brand-blue">
                <th className="px-4 py-3 text-base font-bold">Category</th>
                <th className="px-4 py-3 text-base font-bold">Requirement</th>
                <th className="px-4 py-3 text-base font-bold">BitExtract AI Specification</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((s) => (
                <tr key={`${s.category}-${s.requirement}`} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 text-xs text-ink">{s.category}</td>
                  <td className="px-4 py-3 text-xs text-ink">{s.requirement}</td>
                  <td className="px-4 py-3 text-xs text-ink">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Mobile: stacked cards (below md) */}
          <div className="space-y-4 md:hidden">
            {specs.map((s) => (
              <div key={`${s.category}-${s.requirement}`} className="rounded-lg border border-slate-100 bg-white p-4">
                <p className="text-sm font-bold text-brand-blue">{s.category}</p>
                <dl className="mt-3 space-y-2 text-xs">
                  <div className="flex gap-4">
                    <dt className="w-[30%] shrink-0 font-medium text-slate-500">Requirement</dt>
                    <dd className="w-[70%] text-left text-ink">{s.requirement}</dd>
                  </div>
                  <div className="flex gap-4">
                    <dt className="w-[30%] shrink-0 font-medium text-slate-500">Specification</dt>
                    <dd className="w-[70%] text-left text-ink">{s.value}</dd>
                  </div>
                </dl>
              </div>
            ))}
          </div>
        </div>

        {/* Accuracy Measurement & Scope — white card (same style as Advanced Document Intelligence) */}
        <div className="mt-5 rounded-lg bg-white p-5 md:p-7 shadow-sm md:p-8 lg:p-9">
          <h3 className="font-display text-xl font-bold text-brand-blue">Accuracy Measurement &amp; Scope</h3>
          {/* <h3 className="font-display text-xl font-bold text-brand-blue">ACCURACY MEASUREMENT &amp; SCOPE</h3> */}
          <p className="mt-5 text-xs leading-relaxed text-gray1">
            The stated accuracy applies based on 300 DPI and above test result printed documents whose quality is suitable
            for OCR. The following are treated as not meeting the required quality and are{' '}
            <strong className="font-bold">excluded from the accuracy guarantee</strong>: scans that are blurred, skewed,
            torn or incomplete, or otherwise low-quality or low-resolution. The guarantee also measures{' '}
            <strong className="font-bold">main text only</strong> visual-format fidelity.
          </p>
        </div>
      </div>
    </section>
  )
}
