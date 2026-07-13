import type { CSSProperties } from 'react'
import { keyBenefits } from '../data'
import { IconScan, IconTune, IconShield, IconCloud } from './icons'

// "unstructured" is outlined vector art in the .fig — recreated here as styled glyphs.
// (For a pixel-perfect match, export that graphic from Figma as PNG/SVG and drop it in.)
const ransom: { c: string; s: CSSProperties }[] = [
  { c: 'u', s: { color: '#111', fontFamily: 'Georgia, serif', transform: 'rotate(-6deg)' } },
  { c: 'N', s: { color: '#0f42c6', fontWeight: 800, transform: 'rotate(4deg)' } },
  { c: 's', s: { color: '#111', fontStyle: 'italic', transform: 'rotate(-3deg)' } },
  { c: 'T', s: { color: '#1b1b1b', fontFamily: 'Georgia, serif', transform: 'rotate(6deg)' } },
  { c: 'r', s: { color: '#b01868', transform: 'rotate(-8deg)' } },
  { c: 'U', s: { color: '#fff', WebkitTextStroke: '2px #0f42c6', transform: 'rotate(3deg)' } },
  { c: 'C', s: { color: '#12b3b3', fontWeight: 800, transform: 'rotate(-4deg)' } },
  { c: 't', s: { color: '#111', fontFamily: 'Georgia, serif', transform: 'rotate(7deg)' } },
  { c: 'U', s: { color: '#111', fontWeight: 800, transform: 'rotate(-2deg)' } },
  { c: 'r', s: { color: '#3d2ea9', fontStyle: 'italic', transform: 'rotate(9deg)' } },
  { c: 'E', s: { color: '#d23', fontFamily: 'Georgia, serif', transform: 'rotate(-5deg)' } },
  { c: 'D', s: { color: '#0f42c6', fontWeight: 800, transform: 'rotate(4deg)' } },
]

const benefitStyle = [
  { icon: IconScan, color: '#0f42c6' },
  { icon: IconTune, color: '#3d2ea9' },
  { icon: IconShield, color: '#12b3b3' },
  { icon: IconCloud, color: '#b01868' },
]

export default function Transform() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-x">
        {/* Transform unstructured data into ACTIONABLE INSIGHTS */}
        <div className="flex flex-wrap items-baseline gap-x-3">
          <span className="font-display text-3xl font-bold text-ink lg:text-[34px]">Transform</span>
          <span className="inline-flex items-baseline">
            {ransom.map((g, i) => (
              <span key={i} className="inline-block text-4xl font-bold lg:text-5xl" style={g.s}>
                {g.c}
              </span>
            ))}
            <span className="ml-1 inline-block text-4xl font-bold text-ink lg:text-5xl" style={{ transform: 'rotate(-3deg)' }}>
              d
            </span>
            <span className="inline-block text-4xl font-bold text-ink lg:text-5xl" style={{ transform: 'rotate(5deg)' }}>A</span>
            <span className="inline-block text-4xl font-bold text-ink lg:text-5xl">t</span>
            <span className="inline-block text-4xl font-bold text-ink lg:text-5xl" style={{ transform: 'rotate(-4deg)' }}>a</span>
          </span>
        </div>
        <p className="mt-1 font-display text-4xl font-extrabold tracking-tight text-ink lg:text-[58px]">
          <span className="text-2xl font-light text-gray2 lg:text-3xl">into </span>
          ACTIONABLE INSIGHTS
        </p>

        {/* With BITTEXT */}
        <div className="mt-10">
          <p className="font-display text-2xl font-light text-ink">With</p>
          <p className="font-display text-5xl font-extrabold tracking-tight text-ink">
            BIT<span className="text-brand-blue">TEXT</span>
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink">
            Unlock the power of your documents. From Thai forms to complex financial tables, BitExtract AI by ThinkBit
            provides a seamless, high-performance PaaS solution for automated data extraction and secure cloud storage.
          </p>
        </div>

        {/* Key Benefits */}
        <h3 className="mt-10 text-2xl font-bold text-ink">Key Benefits</h3>
        <div className="mt-6 grid max-w-4xl gap-x-16 gap-y-8 sm:grid-cols-2">
          {keyBenefits.map((b, i) => {
            const Icon = benefitStyle[i].icon
            return (
              <div key={b.title}>
                <div className="flex items-center gap-2 text-lg font-bold" style={{ color: benefitStyle[i].color }}>
                  {b.title}
                  <Icon className="h-5 w-5" />
                </div>
                <p className="mt-1 text-xs leading-relaxed text-ink">{b.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
