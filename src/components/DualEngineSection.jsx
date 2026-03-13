export function DualEngineSection() {
  return (
    <section className="px-6 md:px-12 xl:px-20">
      <div className="grid gap-y-12 justify-items-center max-w-7xl mx-auto">
        <span>
          <img
            src="/smodel.png"
            alt="singularity_model.png"
            className="w-full max-w-[300px] md:max-w-[420px]"
          />
        </span>

        <h1 className="text-xl md:text-3xl xl:text-4xl font-orbitron font-semibold text-center">
          Dual Engine Architecture
        </h1>

        <p className="text-center max-w-2xl">
          Two synergistic mechanisms working together to maximize investor
          returns and token value appreciation.
        </p>

        <div className="flex flex-col md:flex-row gap-4 w-full">
          <div className="grid rounded-2xl shadow flex-1">
            <div className="flex px-4 bg-[#121b17] justify-between items-center rounded-t-xl py-3">
              <div className="flex gap-x-2 items-center">
                <span>
                  <img src="section4card.png" alt="uarrow.png" />
                </span>
                <span className="grid gap-y-1">
                  <h3 className="text-lg md:text-xl xl:text-2xl">
                    The Yield Engine
                  </h3>
                  <p className="text-primary text-sm">Stablecoin Growth</p>
                </span>
              </div>

              <span className="text-secondary text-xs md:text-sm p-2 rounded-full bg-[#13261d] border border-[#11432d]">
                ENGINE B
              </span>
            </div>

            <p className="font-light px-4 bg-[#121b17] py-4 text-sm md:text-base">
              Deposit USDT into institutional-grade yield strategies. Our
              multi-protocol approach generates consistently monthly returns
              through diversified DeFi positions.
            </p>

            <div className="grid px-4 py-4 bg-[#151415] gap-y-1">
              <span className="flex gap-x-2 items-center">
                <img src="/c1.png" className="h-4 w-4" />
                <p className="text-primary text-sm">Principal Protected</p>
              </span>

              <span className="flex gap-x-2 items-center">
                <img src="/c2.png" className="h-4 w-4" />
                <p className="text-primary text-sm">Compounding returns</p>
              </span>

              <span className="flex gap-x-2 items-center">
                <img src="/c3.png" className="h-4 w-4" />
                <p className="text-primary text-sm">Auto Re-balanced</p>
              </span>
            </div>

            <div className="px-4 bg-[#151415]">
              <div className="bg-[#1d1c1d] rounded-lg py-3 flex">
                <span className="w-1/2 flex gap-x-2 justify-center items-center">
                  <p className="text-primary text-sm">Min Deposit</p>
                  <p>$200</p>
                </span>

                <span className="w-1/2 flex gap-x-2 justify-center items-center">
                  <p className="text-primary text-sm">Avg APY</p>
                  <p>40%</p>
                </span>
              </div>
            </div>

            <div className="px-4 bg-[#151415] rounded-b-xl">
              <button className="bg-[#1d1c1d] rounded-lg py-3 my-3 w-full text-[#26ef99]">
                <a href="#">Start Earning</a>
              </button>
            </div>
          </div>

          <div className="grid rounded-2xl shadow flex-1">
            <div className="flex px-4 bg-[#231f10] justify-between items-center rounded-t-xl py-3">
              <div className="flex gap-x-2 items-center">
                <span>
                  <img src="token.png" alt="token.png" />
                </span>

                <span className="grid gap-y-1">
                  <h3 className="text-lg md:text-xl xl:text-2xl">
                    The Token Engine
                  </h3>
                  <p className="text-primary text-sm">
                    $PRM Value Appreciation
                  </p>
                </span>
              </div>

              <span className="text-[#ffdb43] text-xs md:text-sm p-2 rounded-full bg-[#2e2813] border border-[#413507]">
                ENGINE B
              </span>
            </div>

            <p className="font-light px-4 bg-[#231f10] py-4 text-sm md:text-base">
              Enginnered scarcity through buyback and burn mechanisms. A portion
              of all yield is used to purchase and permanently removed $PRM from
              circulation.
            </p>

            <div className="grid px-4 py-4 bg-[#151415] gap-y-1">
              <span className="flex gap-x-2 items-center">
                <img src="/cc1.png" className="h-4 w-4" />
                <p className="text-primary text-sm">Deflationary Suppply</p>
              </span>

              <span className="flex gap-x-2 items-center">
                <img src="/cc2.png" className="h-4 w-4" />
                <p className="text-primary text-sm">Buyback & Burn</p>
              </span>

              <span className="flex gap-x-2 items-center">
                <img src="/cc3.png" className="h-4 w-4" />
                <p className="text-primary text-sm">Vested Rewards</p>
              </span>
            </div>

            <div className="px-4 bg-[#151415]">
              <div className="bg-[#1d1c1d] rounded-lg py-3 flex">
                <span className="w-1/2 flex gap-x-2 justify-center items-center">
                  <p className="text-primary text-sm">Total Supply</p>
                  <p>10M $PRM</p>
                </span>

                <span className="w-1/2 flex gap-x-2 justify-center items-center">
                  <p className="text-primary text-sm">Burned</p>
                  <p>28.05%</p>
                </span>
              </div>
            </div>

            <div className="px-4 bg-[#151415] rounded-b-xl">
              <button className="bg-[#1d1c1d] rounded-lg py-3 my-3 w-full text-[#26ef99]">
                <a href="#">View Tokonomics</a>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full justify-between">
          <div className="bg-[#151415] grid justify-center gap-y-2 px-8 py-5 rounded-lg shadow w-full md:w-1/3 text-center">
            <p className="text-primary text-sm">Yield Generated</p>
            <p>USDT Returns</p>
          </div>

          <img
            src="/frontarrow.png"
            alt="arrow.png"
            className="hidden md:block"
          />

          <img src="/droparrow.png" alt="arrow.png" className="md:hidden" />

          <div className="bg-secondary grid justify-center gap-y-2 px-8 py-5 rounded-lg shadow w-full md:w-1/3 text-center">
            <p className="text-black text-sm">Singularity Protocol</p>
            <p className="text-black">Value Accural</p>
          </div>

          <img
            src="/frontarrow.png"
            alt="arrow.png"
            className="hidden md:block"
          />

          <img src="/droparrow.png" alt="arrow.png" className="md:hidden" />

          <div className="bg-[#151415] grid justify-center gap-y-2 px-8 py-5 rounded-lg shadow w-full md:w-1/3 text-center">
            <p className="text-primary text-sm">Token Scarcity</p>
            <p>$PRM Burn</p>
          </div>
        </div>
      </div>
    </section>
  );
}
