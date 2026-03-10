export function WhitepaperSection(){
    return(
        <section className="px-0 md:px-20 py-10 my-20 relative overflow-hidden">
  <div className="max-w-7xl mx-auto relative">

    {/* Background */}
    <div className="absolute inset-0 flex justify-center md:mt-0 -mt-11 pointer-events-none">
      <img
        src="/bgrectangle.png"
        className="w-full h-76 md:h-auto max-w-5xl object-fill"
        alt=""
      />
    </div>

    {/* Content */}
    <div className="relative flex flex-col md:flex-row md:pl-47.5 items-center justify-between gap-10">

      {/* Left Content */}
      <div className="grid gap-y-4 md:w-1/2 text-center md:text-left">
        <h1 className="text-black font-bold md:text-3xl">
          White-Paper
        </h1>

        <p className="text-xs md:text-base font-medium text-black">
          Explore the core architecture, security framwork, and governance model behind our institutional-grade DeFi protocol. Discover how we enable compliant, scalable, and secure on-chain capital deployment for modern financial institutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
          <button className="bg-white text-black rounded-lg flex items-center gap-x-2 px-4 py-3 shadow">
            <img src="/pdf1.png" className="w-5 h-6" alt="" />
            <a href="#" className="font-semibold">Download PDF</a>
          </button>

          <button className="bg-black text-white rounded-lg flex items-center gap-x-2 px-4 py-3">
            <img src="/book4.png" className="w-5 h-5" alt="" />
            <a href="#" className="font-semibold">Read White-Paper</a>
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="md:w-1/2 hidden md:flex ">
        <img
          src="/bindclip.png"
          className="w-72 sm:w-80 md:w-96 object-contain"
          alt=""
        />
      </div>

    </div>
  </div>
</section>
    )
}