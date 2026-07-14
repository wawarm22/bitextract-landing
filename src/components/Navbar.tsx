

export default function Navbar() {

  return (
    <header className="top-0 z-50 bg-white">
      <div className="container-x flex h-[88px]">
        {/* logo */}
        <a href="https://www.think-bit.org/" className="flex items-center">
          <img src="/assets/bit-extract.svg" alt="Think Bit Company Limited" className="h-8 max-w-[100px] sm:h-10 sm:max-w-[90px] md:h-[46px] md:max-w-[140px]" />
        </a>

        <div className="mx-3 my-auto h-7 w-px bg-black/100"/>        

        <a href="https://www.think-bit.org/" className="flex items-center">
          <img src="/assets/thinkbit.svg" alt="Think Bit Company Limited" className="h-8 max-w-[100px] sm:h-10 sm:max-w-[90px] md:h-[46px] md:max-w-[140px]" />
        </a>
      </div>
    </header>
  )
}
