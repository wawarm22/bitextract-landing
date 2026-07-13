import { specs } from '../data'

export default function SpecsTable() {
  return (
    <section id="specs" className="bg-white pb-24">
      <div className="container-x">
        <p className="mb-6 font-bold tracking-[0.15em] text-xs uppercase text-ink">
          Technical Specifications &amp; Compliance Table
        </p>
        <div className="overflow-x-auto rounded-lg border border-slate-200">
          <table className="w-full min-w-[680px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-soft">
                <th className="px-6 py-3 font-semibold">Category</th>
                <th className="px-6 py-3 font-semibold">Requirement</th>
                <th className="px-6 py-3 font-semibold text-brand-blue">BitExtract AI Specification</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((s, i) => (
                <tr key={s.category} className={i % 2 ? 'bg-slate-50/40' : 'bg-white'}>
                  <td className="px-6 py-3 font-medium text-ink">{s.category}</td>
                  <td className="px-6 py-3 text-slate-soft">{s.requirement}</td>
                  <td className="px-6 py-3 text-slate-text">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
