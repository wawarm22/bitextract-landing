import { keyBenefits } from '../data'
import { IconScan, IconTune, IconShield, IconCloud } from './icons'

const ransom = 'uNsTrUCtUrED'.split('')
const styles = [
  'text-brand-blue rotate-2',
  'text-ink -rotate-3 font-serif',
  'text-brand-magenta rotate-1',
  'text-brand-purple -rotate-2',
  'text-brand-teal rotate-3 italic',
  'text-ink -rotate-1',
]

const benefitStyle: Record<string, { icon: typeof IconScan; color: string }> = {
  blue: { icon: IconScan, color: 'text-brand-blue' },
  purple: { icon: IconTune, color: 'text-brand-purple' },
  teal: { icon: IconShield, color: 'text-brand-teal' },
  magenta: { icon: IconCloud, color: 'text-brand-magenta' },
}

export default function Transform() {
  return (
    <section className="bg-white py-20">
      <div className="container-x">
        <h2 className="font-display text-4xl font-extrabold leading-tight tracking-tight text-ink lg:text-5xl">
          <span className="text-2xl font-bold lg:text-3xl">Transform </span>
          <span className="mx-1 inline-flex flex-wrap items-baseline">
            {ransom.map((c, i) => (
              <span key={i} className={`inline-block font-extrabold ${styles[i % styles.length]}`}>
                {c}
              </span>
            ))}
            <span className="ml-1 font-extrabold text-ink">dAta</span>
          </span>
          <br />
          <span className="text-xl font-medium text-slate-soft">into </span>
          <span className="text-brand-blue">ACTIONABLE INSIGHTS</span>
        </h2>

        <div className="mt-8 max-w-3xl">
          <p className="text-lg text-slate-soft">With</p>
          <p className="font-display text-4xl font-extrabold tracking-tight text-ink">
            BIT<span className="text-brand-blue">TEXT</span>
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-soft">
            Unlock the power of your documents. From Thai forms to complex financial tables,
            BitExtract AI by ThinkBit provides a seamless, high-performance PaaS solution for
            automated data extraction and secure cloud storage.
          </p>
        </div>

        <h3 className="mt-12 text-lg font-bold text-ink">Key Benefits</h3>
        <div className="mt-6 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {keyBenefits.map((b) => {
            const s = benefitStyle[b.color]
            const Icon = s.icon
            return (
              <div key={b.title} className="max-w-md">
                <div className={`flex items-center gap-2 font-semibold ${s.color}`}>
                  <Icon className="h-5 w-5" />
                  {b.title}
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-soft">{b.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
