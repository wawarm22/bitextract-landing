

export default function Navbar() {

  return (
    <header className="top-0 z-50 bg-white">
      <div className="container-x flex h-[88px]">
        {/* logo */}
        <a href="https://www.think-bit.org/" className="flex items-center">
          <img src="/assets/bit-extract.svg" alt="Think Bit Company Limited" className="h-8 max-w-[180px] sm:h-10 sm:max-w-[200px] md:h-[46px] md:max-w-[210px]" />
        </a>

        <div className="mx-3 my-auto h-8 w-px bg-black/100"/>        

        <a href="https://www.think-bit.org/" className="flex items-center">
          <img src="/assets/thinkbit.svg" alt="Think Bit Company Limited" className="h-8 max-w-[160px] sm:h-10 sm:max-w-[180px] md:h-[46px] md:max-w-[195px]" />
        </a>
      </div>
    </header>
  )
}
