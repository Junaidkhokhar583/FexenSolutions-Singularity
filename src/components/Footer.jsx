export function Footer() {
  return (
    <>
      <section className="px-6 md:px-16 xl:px-24 py-10 md:mt-5 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:flex md:gap-x-8 gap-y-10">
            <div className="grid gap-y-4 md:w-1/3 max-w-sm">
              <img src="/singularity.png" className="w-[180px]" />

              <p className="text-sm text-primary md:text-balance">
                Democratizing institutional grade yield generation through
                transparent, on-chain infrastructure.
              </p>

              <div className="flex gap-4 flex-wrap">
                <img
                  src="/link1.png"
                  alt="link.png"
                  className="w-10 h-10 xl:w-auto xl:h-auto"
                />
                <img
                  src="/link2.png"
                  alt="link.png"
                  className="w-10 h-10 xl:w-auto xl:h-auto"
                />
                <img
                  src="/link3.png"
                  alt="link.png"
                  className="w-10 h-10 xl:w-auto xl:h-auto"
                />
                <img
                  src="/link4.png"
                  alt="link.png"
                  className="w-10 h-10 xl:w-auto xl:h-auto"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 md:w-2/3">
              <div className="grid gap-y-2">
                <h3 className="font-bold text-white text-lg">PRODUCT</h3>

                <span className="flex gap-x-1 text-primary mt-3">
                  <a className="text-sm lg:text-base" href="#">
                    Invest
                  </a>
                  <img src="/diagnolarrow.png" className="w-5 h-5" />
                </span>

                <span className="flex gap-x-1 text-primary">
                  <a className="text-sm lg:text-base" href="#">
                    Tokenomics
                  </a>
                  <img src="/diagnolarrow.png" className="w-5 h-5" />
                </span>

                <span className="flex gap-x-1 text-primary">
                  <a className="text-sm lg:text-base" href="#">
                    Roadmap
                  </a>
                  <img src="/diagnolarrow.png" className="w-5 h-5" />
                </span>

                <span className="flex gap-x-1 text-primary">
                  <a className="text-sm lg:text-base" href="#">
                    Security
                  </a>
                  <img src="/diagnolarrow.png" className="w-5 h-5" />
                </span>
              </div>

              <div className="grid gap-y-2">
                <h3 className="font-bold text-white text-lg">RESOURCES</h3>

                <span className="flex gap-x-1 text-primary mt-3">
                  <a className="text-sm lg:text-base" href="#">
                    Documentation
                  </a>
                  <img src="/diagnolarrow.png" className="w-5 h-5" />
                </span>

                <span className="flex gap-x-1 text-primary">
                  <a className="text-sm lg:text-base" href="#">
                    Whitepaper
                  </a>
                  <img src="/diagnolarrow.png" className="w-5 h-5" />
                </span>

                <span className="flex gap-x-1 text-primary">
                  <a className="text-sm lg:text-base" href="#">
                    Github
                  </a>
                  <img src="/diagnolarrow.png" className="w-5 h-5" />
                </span>

                <span className="flex gap-x-1 text-primary">
                  <a className="text-sm lg:text-base" href="#">
                    API
                  </a>
                  <img src="/diagnolarrow.png" className="w-5 h-5" />
                </span>
              </div>

              <div className="grid gap-y-2">
                <h3 className="font-bold text-white text-lg">COMMUNITY</h3>

                <span className="flex gap-x-1 text-primary mt-3">
                  <a className="text-sm lg:text-base" href="#">
                    Twitter
                  </a>
                  <img src="/diagnolarrow.png" className="w-5 h-5" />
                </span>

                <span className="flex gap-x-1 text-primary">
                  <a className="text-sm lg:text-base" href="#">
                    Discord
                  </a>
                  <img src="/diagnolarrow.png" className="w-5 h-5" />
                </span>

                <span className="flex gap-x-1 text-primary">
                  <a className="text-sm lg:text-base" href="#">
                    Telegram
                  </a>
                  <img src="/diagnolarrow.png" className="w-5 h-5" />
                </span>

                <span className="flex gap-x-1 text-primary">
                  <a className="text-sm lg:text-base" href="#">
                    Blog
                  </a>
                  <img src="/diagnolarrow.png" className="w-5 h-5" />
                </span>
              </div>

              <div className="grid gap-y-2">
                <h3 className="font-bold text-white text-lg">LEGAL</h3>

                <span className="flex gap-x-1 text-primary mt-3">
                  <a className="text-sm lg:text-base" href="#">
                    Terms of Services
                  </a>
                  <img src="/diagnolarrow.png" className="w-5 h-5" />
                </span>

                <span className="flex gap-x-1 text-primary">
                  <a className="text-sm lg:text-base" href="#">
                    Privacy Policy
                  </a>
                  <img src="/diagnolarrow.png" className="w-5 h-5" />
                </span>

                <span className="flex gap-x-1 text-primary">
                  <a className="text-sm lg:text-base" href="#">
                    Risk Disclosure
                  </a>
                  <img src="/diagnolarrow.png" className="w-5 h-5" />
                </span>

                <span className="flex gap-x-1 text-primary">
                  <a className="text-sm lg:text-base" href="#">
                    Audits
                  </a>
                  <img src="/diagnolarrow.png" className="w-5 h-5" />
                </span>
              </div>
            </div>
          </div>

          <div className="w-full h-[1px] bg-[#181719] rounded-xl my-10"></div>

          <div className="grid md:flex md:justify-between gap-y-8">
            <span className="text-sm text-primary">
              {Date().slice(11, 15)} Singularity Protocol. All rights reserved.
            </span>

            <span className="text-sm text-primary md:text-right md:max-w-xl">
              Disclaimer: Cryptocurrency Investments carry high risk. Past
              performance does not gurantee future results. Please read our Risk
              Disclosure before Investing.
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
