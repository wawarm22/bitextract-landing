// Original ThinkBit site footer, recreated.
// NOTE: replace the logo mark with the real ThinkBit logo asset when available.
function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="currentColor">
      <path d="M6.6 10.8a15 15 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.4-1 1-1h3.4c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1l-2.1 2Z" />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  )
}

function LogoWhite() {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="inline-block h-9 w-9 rounded-md"
        style={{ background: 'linear-gradient(135deg,#e0399a 0%,#7b3ff2 45%,#2f7bf2 100%)' }}
      />
      <span className="text-2xl font-extrabold tracking-tight text-white">
        THINK<span className="text-slate-300">BIT</span>
      </span>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="relative bg-[#0d0e42] text-white">
      <div className="container-x py-10">
        {/* top row: logo · phone · email */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <LogoWhite />
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-12">
            <a href="tel:021073895" className="flex items-center gap-3 font-bold hover:text-brand-cyan">
              <PhoneIcon />
              02-107-3895
            </a>
            <a href="mailto:customerservice@think-bit.org" className="flex items-center gap-3 font-bold hover:text-brand-cyan">
              <MailIcon />
              customerservice@think-bit.org
            </a>
          </div>
        </div>

        {/* divider */}
        <div className="my-6 h-px w-full bg-white/20" />

        {/* copyright */}
        <p className="text-center text-sm font-semibold">
          Copyright © 2020 THINKBIT Co., Ltd. All Rights Reserved.
        </p>
      </div>

      {/* privacy box */}
      <a
        href="https://www.think-bit.org/privacy"
        className="absolute bottom-3 right-4 border border-white/40 px-3 py-1.5 text-xs text-white hover:bg-white/10"
      >
        Privacy &amp; Cookies Policy
      </a>
    </footer>
  )
}
