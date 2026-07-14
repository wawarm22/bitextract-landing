// ThinkBit footer bar — matched to the live site (Elementor). bg #050445, white text.
// Icons are the exact Font Awesome glyphs used on the live site (phone-alt / mail-bulk).
// NOTE: save the white footer logo to public/assets/thinkbit-logo-white.png
function PhoneIcon() {
  return (
    <svg viewBox="0 0 512 512" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z" />
    </svg>
  )
}
function MailIcon() {
  return (
    <svg viewBox="0 0 576 512" className="h-5 w-5 shrink-0" fill="currentColor" aria-hidden="true">
      <path d="M160 448c-25.6 0-51.2-22.4-64-32-64-44.8-83.2-60.8-96-70.4V480c0 17.67 14.33 32 32 32h256c17.67 0 32-14.33 32-32V345.6c-12.8 9.6-32 25.6-96 70.4-12.8 9.6-38.4 32-64 32zm128-192H32c-17.67 0-32 14.33-32 32v16c25.6 19.2 22.4 19.2 115.2 86.4 9.6 6.4 28.8 25.6 44.8 25.6s35.2-19.2 44.8-22.4c92.8-67.2 89.6-67.2 115.2-86.4V288c0-17.67-14.33-32-32-32zm256-96H224c-17.67 0-32 14.33-32 32v32h96c33.21 0 60.59 25.42 63.71 57.82l.29-.22V416h192c17.67 0 32-14.33 32-32V192c0-17.67-14.33-32-32-32zm-32 128h-64v-64h64v64zm-352-96c0-35.29 28.71-64 64-64h224V32c0-17.67-14.33-32-32-32H96C78.33 0 64 14.33 64 32v192h96v-32z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer className="relative bg-[#050445] text-white">
      <div className="container-x py-9">
        {/* top row: logo · phone · email */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* white footer logo — save to public/assets/thinkbit-logo-white.png */}
          <img
            src="/assets/thinkbit-logo-white.png"
            width={1024}
            height={251}
            alt="Think Bit Company Limited"
            className="h-10 w-auto"
          />
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:gap-14">
            <a href="tel:+021073895" className="flex items-center gap-3 font-bold text-white hover:text-brand-cyan">
              <PhoneIcon />
              02-107-3895
            </a>
            <a href="mailto:customerservice@think-bit.org" className="flex items-center gap-3 font-bold text-white hover:text-brand-cyan">
              <MailIcon />
              customerservice@think-bit.org
            </a>
          </div>
        </div>

        {/* divider */}
        <div className="my-6 h-px w-full bg-white/100" />

        {/* copyright */}
        <p className="text-center text-sm font-semibold">
          Copyright © 2020 THINKBIT Co., Ltd. All Rights Reserved.
        </p>
      </div>      
    </footer>
  )
}
