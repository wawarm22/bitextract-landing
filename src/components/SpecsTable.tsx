import { specs } from '../data'

export default function SpecsTable() {
  return (
    <section id="specs" className="bg-white pb-20">
      <div className="container-x">
        <p className="mb-5 text-xl font-bold text-ink">Technical Specifications &amp; Compliance Table</p>
        <div className="rounded-md bg-white p-4 shadow-sm ring-1 ring-slate-100">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead>
              <tr className="border-b-2 border-slate-200 text-brand-blue">
                <th className="px-4 py-3 text-base font-bold">Category</th>
                <th className="px-4 py-3 text-base font-bold">Requirement</th>
                <th className="px-4 py-3 text-base font-bold">BitExtract AI Specification</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((s) => (
                <tr key={s.category} className="border-b border-slate-100 last:border-0">
                  <td className="px-4 py-3 text-xs text-ink">{s.category}</td>
                  <td className="px-4 py-3 text-xs text-ink">{s.requirement}</td>
                  <td className="px-4 py-3 text-xs text-ink">{s.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
