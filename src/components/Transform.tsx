import type { CSSProperties } from 'react'

// "unstructured data" is outlined vector art in the .fig — recreated here as styled glyphs.
// (For a pixel-perfect match, export that graphic from Figma as PNG/SVG and drop it in.)
// size = em multiplier of the base font size; dy nudges vertical position.
const ransom: { c: string; s: CSSProperties; size: number; dy?: number }[] = [
  { c: 'u', size: 0.9, s: { color: '#b01868', fontFamily: 'Georgia, serif', transform: 'rotate(-10deg)' } },
  { c: 'N', size: 1.55, dy: -4, s: { color: '#44bcd3', fontWeight: 800, transform: 'rotate(3deg)' } },
  { c: 's', size: 0.85, dy: 6, s: { color: '#111', fontStyle: 'italic', transform: 'rotate(-6deg)' } },
  { c: 'T', size: 1.5, dy: -2, s: { color: '#2ba7c4', fontFamily: 'Georgia, serif', transform: 'rotate(-12deg)' } },
  { c: 'r', size: 0.8, dy: 8, s: { color: '#3d2ea9', transform: 'rotate(9deg)' } },
  { c: 'U', size: 1.05, s: { color: '#fff', WebkitTextStroke: '2px #1b1b1b', transform: 'rotate(5deg)' } },
  { c: 'C', size: 1.65, dy: -3, s: { color: '#0f42c6', fontWeight: 800, transform: 'rotate(-4deg)' } },
  { c: 't', size: 0.85, dy: 6, s: { color: '#b01868', fontFamily: 'Georgia, serif', fontStyle: 'italic', transform: 'rotate(11deg)' } },
  { c: 'U', size: 1.5, s: { color: '#fff', WebkitTextStroke: '2px #444', transform: 'rotate(-5deg)' } },
  { c: 'r', size: 0.8, dy: 8, s: { color: '#7a6fd0', transform: 'rotate(7deg)' } },
  { c: 'E', size: 1.15, s: { color: '#fff', WebkitTextStroke: '2px #3d2ea9', fontFamily: 'Georgia, serif', transform: 'rotate(-7deg)' } },
  { c: 'D', size: 1.55, dy: -3, s: { color: '#111', fontWeight: 800, transform: 'rotate(3deg)' } },
  { c: ' ', size: 0.4, s: {} },
  { c: 'd', size: 0.95, dy: 4, s: { color: '#44bcd3', transform: 'rotate(-5deg)' } },
  { c: 'A', size: 1.1, s: { color: '#b01868', fontWeight: 800, transform: 'rotate(6deg)' } },
  { c: 't', size: 0.85, dy: 4, s: { color: '#111', transform: 'rotate(-3deg)' } },
  { c: 'a', size: 0.95, s: { color: '#44bcd3', transform: 'rotate(-4deg)' } },
]

// Exact icons exported as SVG from the Figma file, embedded inline (crisp at any size).
const TargetIcon = () => (
  <svg viewBox="0 0 66 69" className="relative top-[-5px] ms-[0.15em] inline-block h-[1.4em] w-auto" fill="#0F42C6">
    <path d="M57.0667 0.0266027C57.528 0.39904 57.8868 0.585259 58.0662 1.19712C58.3225 1.9952 58.8863 7.02311 59.117 7.18272L64.8322 8.22023C65.4216 8.40645 65.6267 8.77888 65.9598 9.25773V10.4549C65.7292 10.6943 65.601 11.0135 65.3704 11.2529C64.704 12.051 61.3979 15.5626 60.6803 15.8552C58.9376 16.5735 55.3239 15.6158 53.4018 16.1744L30.0284 40.4361C27.9525 42.2184 25.3127 39.5848 26.9273 37.3502L50.4288 12.9555C50.8645 10.9603 50.0188 7.23593 50.6851 5.48015C50.9927 4.70867 54.3244 1.30353 55.1189 0.611862C55.3752 0.39904 55.6827 0.266027 55.8878 0H57.041L57.0667 0.0266027Z" />
    <path d="M27.4142 9.28451C33.7445 9.04508 40.3054 11.1201 45.3287 15.0573L39.8697 20.6971C28.3112 12.8493 12.447 18.8881 8.5002 32.5619C3.70763 49.2151 18.5467 64.6181 34.5902 59.6434C47.7634 55.5466 53.5811 39.0795 46.0206 27.0817L51.4539 21.4153C54.0424 25.0599 55.9389 29.4227 56.6309 33.9452C60.7315 60.0424 32.3349 78.4781 11.6782 62.8357C-10.1062 46.3154 0.555317 10.2954 27.4142 9.28451Z" />
    <path d="M35.5643 25.1662L29.7722 31.2316C24.3646 30.7262 19.9308 35.4348 21.4685 41.048C23.0062 46.6612 30.4386 48.4169 34.1548 43.7881C35.7181 41.8461 35.8206 39.9041 35.9488 37.5098L41.7408 31.5774C45.5851 39.2922 42.7404 48.949 35.2312 52.8064C26.8762 57.116 16.6503 52.5138 14.1387 43.2028C10.5507 29.8749 23.852 18.9146 35.59 25.1662H35.5643Z" />
  </svg>
)
const ShieldIcon = () => (
  <svg viewBox="0 0 51 62" className="relative top-[-5px] mx-[0.02em] inline-block h-[1.4em] w-auto" fill="#44BCD3">
    <path d="M25.1259 0L50.3813 9.55784C50.5396 21.9957 51.6473 37.7566 43.1339 47.8841C38.4499 53.4543 31.867 57.8534 25.6323 61.4613C17.0555 56.9356 6.51656 49.6248 3.16182 40.1303C1.26291 34.75 0.408396 27.0278 0.186857 21.2994C0.0602626 18.4827 -0.161277 13.324 0.186857 10.6972C0.250153 10.2541 0.250182 9.87432 0.661613 9.55784L25.1259 0ZM37.2789 19.2423C36.456 19.3372 35.4433 20.0968 34.8103 20.6032C32.8797 22.1223 23.2903 32.7878 22.4358 32.9144C19.6507 31.5852 16.7707 25.1922 13.2577 26.9328C10.8208 28.1355 11.074 30.4142 12.5298 32.3131C13.6375 33.7373 18.4797 38.6428 19.9039 39.6872C21.1065 40.5733 22.3408 41.0164 23.8283 40.4151L40.2222 24.1161C41.4881 21.8691 39.9057 18.9891 37.2789 19.2423Z" />
  </svg>
)
const ArrowIcon = () => (
  <svg viewBox="0 0 41 62" className="relative top-[-5px] mx-[0.02em] inline-block h-[1.4em] w-auto" fill="#B01868">
    <path d="M30.1145 41.6934L26.7894 45.0185L29.9494 48.1785C29.8315 48.1785 29.7136 48.1785 29.69 48.1785C29.3599 48.1785 29.0533 48.1785 28.7703 48.1785C26.813 48.1785 25.6339 47.9898 25.2565 47.6125C24.8792 47.2352 24.6906 46.2919 24.6906 44.8062V18.1583L33.0859 26.5536L39.7596 19.8798L19.8798 0L0 19.8798L6.67377 26.5536L15.187 18.0404V47.9898C15.187 50.2773 15.7293 51.9752 16.8141 53.0836C18.4884 54.8051 21.5777 55.6069 26.1291 55.4418L29.6428 55.3711L26.8365 58.1774L30.1617 61.5025L40.1134 51.5508L30.1617 41.5991L30.1145 41.6934Z" />
  </svg>
)
const BrainIcon = () => (
  <svg viewBox="0 0 65 51" className="inline-block h-[1.15em] w-auto" fill="#3D2EA9">
    <path d="M3.59426 30.7851C6.36653 32.5141 7.6185 31.3217 9.8542 31.8583C10.0331 31.8881 11.4639 34.0343 12.1793 34.6007C15.3689 37.1345 20.0192 36.2104 20.6452 36.5681C20.9433 36.7172 21.8376 38.4163 22.5828 39.0721C26.3686 42.3213 29.588 39.6087 30.9294 40.3837C32.2411 41.904 37.7856 47.0014 39.9617 50.2208H44.3437L47.464 45.377C52.3229 45.6453 55.5222 46.2264 58.0262 41.2482C58.3839 40.503 58.1752 39.4895 58.5627 38.8038C59.4272 37.2836 62.4976 37.1941 63.988 32.842C65.4189 28.6687 63.7794 28.0128 63.7496 24.6742C63.7496 21.2759 64.7929 19.6066 62.4976 16.0295C61.7523 14.8669 59.6955 13.7938 59.4272 13.4063C59.0695 12.8399 59.2484 11.7071 58.7416 10.8725C56.0886 6.28182 51.0508 2.67488 45.6553 2.16812C44.1648 2.01907 42.5551 2.55564 41.3925 2.37679C39.6636 2.13831 37.0403 0.498797 34.7152 0.230513C29.8265 -0.335866 24.5204 0.051656 20.1384 2.4066C18.5883 3.24126 17.2767 4.73173 16.144 5.35773C12.3284 7.41457 8.69166 7.86171 5.26358 11.3196C0.792172 15.8506 -3.11286 26.6118 3.62405 30.8149L3.59426 30.7851ZM4.72699 19.1893C6.06841 15.4631 9.97343 12.2139 13.4313 10.5446C13.4313 12.035 14.1766 14.3303 14.0573 15.642C13.9679 16.6853 12.0005 19.9941 12.388 20.4711C14.4747 23.0347 15.9055 18.9806 16.3825 18.9806C16.6507 18.9806 18.4989 21.7231 20.1086 20.7394C20.5856 20.4413 21.2414 18.8912 21.1221 18.295C21.0625 17.9075 19.7807 17.6094 19.3336 17.0132C16.5613 13.5851 17.0084 8.93485 20.6452 6.34143C21.4798 5.74525 25.5339 4.07592 26.309 4.07592C28.4553 4.07592 33.5527 3.65859 35.222 4.07592C35.4903 4.13554 35.9374 4.58268 35.7288 5.05963C35.6095 5.35773 31.7641 10.0676 31.4958 10.2465C28.187 12.3927 26.458 8.66656 24.1031 11.2898C23.8646 12.2735 26.6965 14.0323 27.561 14.2707C29.0216 14.6583 31.4064 14.1217 31.5554 14.2111C32.3305 14.7477 33.2844 20.6499 35.7586 18.9806C38.0241 17.4603 36.2057 16.894 35.8182 15.4035C33.0459 4.70192 50.7228 3.15183 54.3298 12.0052C51.7662 11.3792 47.8015 14.539 45.9534 11.7071C44.7908 9.91856 46.4303 9.05409 42.4359 9.53104C41.3925 11.7965 44.2244 14.6284 44.3437 15.8208C44.4331 16.6853 42.1974 18.6825 42.6445 19.4576C44.1648 22.051 45.7447 19.2787 46.4601 18.7421C51.2594 15.1352 60.6792 14.2409 59.8147 22.1702C59.4272 25.8368 55.6116 24.5848 55.3135 24.8829C55.1943 25.0021 55.2539 27.6551 54.8067 28.3408C56.6251 28.8773 58.4733 29.2648 60.2619 28.3408C61.2754 34.3921 54.3894 37.1047 50.3651 33.0506C47.3842 30.0697 49.6796 24.704 49.3815 24.3761C49.292 24.2569 46.788 23.4222 46.639 23.452C44.8802 23.5713 44.4033 31.8284 45.4168 33.2891C39.5742 31.9775 34.2681 35.3161 29.2005 36.1508C22.1655 37.2836 22.3443 29.4437 28.8726 27.8936C32.4795 27.0291 36.8019 28.9071 39.9617 26.5522C39.9617 26.1647 39.604 24.3761 39.4847 24.3761H28.5745L29.0812 19.9047C25.2955 18.8614 26.309 23.2135 24.6397 25.4791C23.9541 26.4031 22.5232 26.8801 21.5395 28.46C20.1384 30.6361 20.8539 32.7525 17.9326 32.6929C11.5534 32.5737 14.9218 28.6687 14.7131 26.6118C14.3256 22.9453 11.1062 27.208 9.79457 27.6253C3.83269 29.5033 3.26634 23.3626 4.78662 19.1297L4.72699 19.1893Z" />
  </svg>
)

// title split so an icon replaces a specific letter (matches the Figma wordmarks)
const benefits = [
  { color: '#0f42c6', pre: 'Precision ', icon: <TargetIcon />, post: 'CR', brain: false,
    desc: 'Specialized in Thai language and cursive handwriting recognition.' },
  { color: '#3d2ea9', pre: 'Custom-Trained Intelligence', icon: null, post: '', brain: true,
    desc: "Don't just use a generic model — build one that understands your specific forms." },
  { color: '#12b3b3', pre: 'Enterprise Sec', icon: <ShieldIcon />, post: 'rity', brain: false,
    desc: 'Bank-grade encryption and global compliance (GDPR, ISO 27001) built-in.' },
  { color: '#b01868', pre: 'Infinite Scalabili', icon: <ArrowIcon />, post: 'y', brain: false,
    desc: 'Hosted on AWS infrastructure, ensuring your operations never stop, no matter how much data you grow.' },
]

export default function Transform() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="container-x">
        {/* Transform unstructured data into ACTIONABLE INSIGHTS */}
        <div className="flex flex-wrap items-center gap-x-3 text-[34px] lg:text-[52px]">
          <span className="font-display font-bold text-ink">Transform</span>
          <span className="inline-flex items-center leading-none">
            {ransom.map((g, i) => (
              <span
                key={i}
                className="inline-block font-bold leading-none"
                style={{ ...g.s, fontSize: `${g.size}em`, transform: `${g.s.transform ?? ''} translateY(${g.dy ?? 0}px)` }}
              >
                {g.c === ' ' ? ' ' : g.c}
              </span>
            ))}
          </span>
        </div>
        <p className="mt-1 font-display text-4xl font-extrabold tracking-tight text-ink lg:text-[58px]">
          <span className="text-2xl font-light text-gray2 lg:text-3xl">into </span>
          ACTIONABLE INSIGHTS
        </p>

        {/* With BITTEXT */}
        <div className="mt-10">
          <p className="font-display text-2xl font-light text-ink">With</p>
          <p className="font-display text-5xl tracking-tight text-ink">
            <span className="font-normal">BIT</span>
            <span className="bg-gradient-to-r from-[#0f42c6] via-[#2f6bf2] to-[#44bcd3] bg-clip-text font-semibold text-transparent">
              TEXT
            </span>
          </p>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-ink">
            Unlock the power of your documents. From Thai forms to complex financial tables, BitExtract AI by ThinkBit
            provides a seamless, high-performance PaaS solution for automated data extraction and secure cloud storage.
          </p>
        </div>

        {/* Key Benefits */}
        <h3 className="mt-10 text-2xl font-bold text-ink">Key Benefits</h3>
        <div className="mt-7 grid max-w-4xl gap-x-16 gap-y-9 sm:grid-cols-2">
          {benefits.map((b) => (
            <div key={b.pre}>
              <div className="relative inline-flex items-center text-lg font-bold" style={{ color: b.color }}>
                {b.brain && (
                  <span className="absolute left-[85px] top-[-0.80em]">
                    <BrainIcon />
                  </span>
                )}
                <span>{b.pre}</span>
                {b.icon}
                <span>{b.post}</span>
              </div>
              <p
                className="mt-2 max-w-sm border-l-2 pl-3 text-xs leading-relaxed text-ink"
                style={{ borderColor: b.color }}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
