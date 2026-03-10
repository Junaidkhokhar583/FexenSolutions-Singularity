export function DualEngineSection(){
    return(
         <section className="md:px-25 px-6">
        {/* outer div jo 5 grid sa bna */}
        <div className="grid gap-y-6 justify-items-center">
          <span>
            <img src="/smodel.png" alt="singularity_model.png"></img>
          </span>
          <h1 className="md:text-4xl text-xl font-orbitron font-semibold">
            Dual Engine Architecture
          </h1>
          <p>
            Two synergistic mechanisms working together to maximize investor
            returns and token value appreciation.
          </p>
          {/* 2 cards wala container    */}
          <div className="md:flex md:gap-x-4 grid gap-y-4">
            {/* 1 card ka andar jo 5 container */}
            <div className="grid rounded-2xl shadow">
              <div className="flex px-4 bg-[#121b17] justify-between items-center rounded-t-xl">
                <div className="flex gap-x-2 items-center">
                  <span>
                    <img src="section4card.png" alt="uarrow.png"></img>
                  </span>
                  <span className="grid gap-y-1">
                    <h3 className="md:text-2xl text-lg">The Yield Engine</h3>
                    <p className="text-[#818182] text-sm">Stablecoin Growth</p>
                  </span>
                </div>
                <span className="text-secondary text-sm p-2 rounded-full bg-[#13261d] border border-s border-[#11432d]">
                  ENGINE B
                </span>
              </div>

              <p className="font-light px-4 bg-[#121b17] py-4">
                Deposit USDT into institutional-grade yield strategies. Our
                multi-protocol approach generates consistently monthly returns
                through diversified DeFi positions.
              </p>
              <div className="grid px-4 py-4 bg-[#151415] gap-y-1">
                <span className="flex gap-x-2 items-center">
                  <img src="/c1.png" className="h-4 w-4"></img>
                  <p className="text-[#817f81] text-sm">Principal Protected</p>
                </span>
                <span className="flex gap-x-2 items-center">
                  <img src="/c2.png" className="h-4 w-4"></img>
                  <p className="text-[#817f81] text-sm">Compounding returns</p>
                </span>
                <span className="flex gap-x-2 items-center">
                  <img src="/c3.png" className="h-4 w-4"></img>
                  <p className="text-[#817f81] text-sm">Auto Re-balanced</p>
                </span>
              </div>

              <div className="px-4 bg-[#151415]">
                <div className="bg-[#1d1c1d] rounded-lg py-3 flex">
                  <span className="w-1/2 flex gap-x-2 justify-center items-center">
                    <p className="text-[#9d9b9d] text-sm">Min Deposit</p>
                    <p>$200</p>
                  </span>
                  <span className="justify-center w-1/2 flex gap-x-2 items-center">
                    <p className="text-[#9d9b9d] text-sm">Avg APY</p>
                    <p>40%</p>
                  </span>
                </div>
              </div>

              <div className="px-4 bg-[#151415] rounded-b-xl">
                <button className="bg-[#1d1c1d] rounded-lg py-3 my-3 w-full justify-center text-[#26ef99]">
                  <a href="#">Start Earning</a>
                </button>
              </div>
            </div>

            <div className="grid rounded-2xl shadow">
              <div className="flex px-4 bg-[#231f10] justify-between items-center rounded-t-xl">
                <div className="flex gap-x-2 items-center">
                  <span>
                    <img src="token.png" alt="token.png"></img>
                  </span>
                  <span className="grid gap-y-1">
                    <h3 className="md:text-2xl text-lg">The Token Engine</h3>
                    <p className="text-[#818182] text-sm">
                      $PRM Value Appreciation
                    </p>
                  </span>
                </div>
                <span className="text-[#ffdb43] text-sm p-2 rounded-full bg-[#2e2813] border border-s border-[#413507]">
                  ENGINE B
                </span>
              </div>

              <p className="font-light px-4 bg-[#231f10] py-4">
                Enginnered scarcity through buyback and burn mechanisms. A
                portion of all yield is used to purchase and permanently removed
                $PRM from circulation.
              </p>
              <div className="grid px-4 py-4 bg-[#151415] gap-y-1">
                <span className="flex gap-x-2 items-center">
                  <img src="/cc1.png" className="h-4 w-4"></img>
                  <p className="text-[#817f81] text-sm">Deflationary Suppply</p>
                </span>
                <span className="flex gap-x-2 items-center">
                  <img src="/cc2.png" className="h-4 w-4"></img>
                  <p className="text-[#817f81] text-sm">Buyback & Burn</p>
                </span>
                <span className="flex gap-x-2 items-center">
                  <img src="/cc3.png" className="h-4 w-4"></img>
                  <p className="text-[#817f81] text-sm">Vested Rewards</p>
                </span>
              </div>

              <div className="px-4 bg-[#151415]">
                <div className="bg-[#1d1c1d] rounded-lg py-3 flex">
                  <span className="w-1/2 flex gap-x-2 justify-center items-center">
                    <p className="text-[#9d9b9d] text-sm">Total Supply</p>
                    <p>10M $PRM</p>
                  </span>
                  <span className="justify-center w-1/2 flex gap-x-2 items-center">
                    <p className="text-[#9d9b9d] text-sm">Burned</p>
                    <p>28.05%</p>
                  </span>
                </div>
              </div>

              <div className="px-4 bg-[#151415] rounded-b-xl">
                <button className="bg-[#1d1c1d] rounded-lg py-3 my-3 w-full justify-center text-[#26ef99]">
                  <a href="#">View Tokonomics</a>
                </button>
              </div>
            </div>
          </div>

          <div className="md:flex md:gap-x-4 grid gap-y-4 items-center w-full">
            <div className="bg-[#151415] grid justify-center gap-y-2 px-10 py-5 rounded-lg shadow md:w-1/3 text-center">
              <p className="text-[#787678] text-sm">Yield Generated</p>
              <p>USDT Returns</p>
            </div>

            <span className="hidden md:block">
              <img src="/frontarrow.png" alt="arrow.png"></img>
            </span>
            <span className="md:hidden justify-self-center">
              <img src="/droparrow.png" alt="arrow.png"></img>
            </span>

            <div className="bg-secondary grid justify-center gap-y-2 px-10 py-5 rounded-lg shadow md:w-1/3 text-center">
              <p className="text-black text-sm">Singularity Protocol</p>
              <p className="text-black">Value Accural</p>
            </div>

            <span className="hidden md:block">
              <img src="/frontarrow.png" alt="arrow.png"></img>
            </span>
            <span className="md:hidden justify-self-center">
              <img src="/droparrow.png" alt="arrow.png"></img>
            </span>

            <div className="bg-[#151415] grid justify-center gap-y-2 px-10 py-5 rounded-lg shadow md:w-1/3 text-center">
              <p className="text-[#787678] text-sm">Token Scarcity</p>
              <p>$PRM Burn</p>
            </div>
          </div>
        </div>
      </section>
    )
}