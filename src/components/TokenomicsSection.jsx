export function Tokenomics() {
  return (
    <section className="md:px-15 lg:px-30 xl:px-45 2xl:px-80 px-6 py-24 md:my-5">
      <div className="grid gap-y-6">
        <div className="grid gap-y-8">
          <img src="/token1.png" alt="tokenomics.png"></img>
          <h1 className="md:text-4xl text-xl">$PRM Token Economics</h1>
          <p className="md:text-lg text-sm text-priamry">
            Designed to align long-term incentives across participants, ensuring
            sustainable growth and protocol resilience.
            <br />
            Utility-driven token model powering governance, access, and value
            capture within the ecosystem.
          </p>
        </div>

        <div className="grid md:grid-cols-6 grid-cols-2 gap-y-4 gap-x-2">
          <div className="bg-[#0b0f12] rounded-lg shadow grid gap-y-2 justify-items-center px-2 py-8">
            <p className="text-sm text-[#9c9a9d]">Total Supply</p>
            <h3 className="font-semibold">
              10,000,000 <strong className="text-primary">$PRM</strong>
            </h3>
          </div>

          <div className="bg-[#0b0f12] rounded-lg shadow grid gap-y-2 justify-items-center px-2 py-8">
            <p className="text-sm text-[#9c9a9d]">Circulating Supply</p>
            <h3 className="font-semibold">
              7,152,608 <strong className="text-primary">$PRM</strong>
            </h3>
          </div>

          <div className="bg-[#0b0f12] rounded-lg shadow grid gap-y-2 justify-items-center px-2 py-8">
            <p className="text-sm text-[#9c9a9d]">Burned to Date</p>
            <h3 className="font-semibold">
              2,847,392 <strong className="text-primary">$PRM</strong>
            </h3>
          </div>

          <div className="bg-[#0b0f12] rounded-lg shadow grid gap-y-2 justify-items-center px-2 py-8">
            <p className="text-sm text-[#9c9a9d]">Market Cap</p>
            <h3 className="font-semibold">
              $1.02 <strong className="text-primary">M</strong>
            </h3>
          </div>

          <div className="bg-[#0b0f12] rounded-lg shadow grid gap-y-2 justify-items-center px-2 py-8">
            <p className="text-sm text-[#9c9a9d]">Current Price</p>
            <h3 className="font-semibold">
              $0.142 <strong className="text-primary">USD</strong>
            </h3>
          </div>

          <div className="bg-[#0b0f12] rounded-lg shadow grid gap-y-2 justify-items-center px-2 py-8">
            <p className="text-sm text-[#9c9a9d]">24h Volume</p>
            <h3 className="font-semibold">
              $245,678 <strong className="text-primary">USD</strong>
            </h3>
          </div>
        </div>

        <div className="md:flex md:gap-x-4 grid gap-y-3">
          <div className="bg-[#0b0f12] rounded-xl shadow-lg px-5 py-10 grid gap-y-8 md:w-5/12">
            <span className="flex justify-between">
              <h3 className="font-semibold">TOTAL SUPPLY</h3>
              <h3 className="text-secondary font-semibold">100,000,000 $PRM</h3>
            </span>
            <div className="justify-items-center">
              <img src="/chart.png"></img>
            </div>
          </div>

          <div className="bg-[#0b0f12] rounded-xl shadow-lg px-5 py-10 md:w-7/12 grid gap-y-16">
            <h3 className="font-semibold">VESTING SCHEDULE</h3>
            <div className="grid gap-y-4">
              <div className="flex justify-between h-fit">
                <div className="flex gap-x-3 items-center">
                  <span className="w-10 h-5 bg-green-400 rounded"></span>
                  <p>Presale</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <p className="text-secondary">55%</p>
                  <button className="border border-s border-[#042815] bg-[#042815] px-5 py-1 rounded-full text-sm text-secondary">
                    Active
                  </button>
                </div>
              </div>

              <span className="bg-[#18191a] w-full h-0.5 rounded-sm"></span>
              <div className="flex justify-between h-fit">
                <div className="flex gap-x-3 items-center">
                  <span className="w-10 h-5 bg-[#1ebf7a] rounded"></span>
                  <p>Liquidity</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <p className="text-secondary">12%</p>
                  <button className="border border-s border-[#042815] bg-[#042815] px-5 py-1 rounded-full text-sm text-secondary">
                    Active
                  </button>
                </div>
              </div>

              <span className="bg-[#18191a] w-full h-0.5 rounded-sm"></span>
              <div className="flex justify-between h-fit">
                <div className="flex gap-x-3 items-center">
                  <span className="w-10 h-5 bg-[#178f5c] rounded"></span>
                  <p>Treasury</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <p className="text-secondary">12%</p>
                  <button className="border border-s border-[#240044] bg-[#240044] px-4 py-1 rounded-full text-sm text-[#d900e8]">
                    Locked
                  </button>
                </div>
              </div>

              <span className="bg-[#18191a] w-full h-0.5 rounded-sm"></span>
              <div className="flex justify-between h-fit">
                <div className="flex gap-x-3 items-center">
                  <span className="w-10 h-5 bg-[#0f603d] rounded"></span>
                  <p>Team</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <p className="text-secondary">09%</p>
                  <button className="border border-s border-[#042815] bg-[#042815] px-5 py-1 rounded-full text-sm text-secondary">
                    Active
                  </button>
                </div>
              </div>

              <span className="bg-[#18191a] w-full h-0.5 rounded-sm"></span>
              <div className="flex justify-between h-fit">
                <div className="flex gap-x-3 items-center">
                  <span className="w-10 h-5 bg-[#08301f] rounded"></span>
                  <p>Marketing</p>
                </div>
                <div className="flex gap-x-3 items-center">
                  <p className="text-secondary">12%</p>
                  <button className="border border-s border-[#372e05] bg-[#372e05] px-4 py-1 rounded-full text-sm text-[#e6c53b]">
                    Vesting
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:flex grid md:gap-x-3 gap-y-3">
          <div className="bg-[#0b0f12] md:p-8 p-4 grid gap-y-4 rounded-lg shadow">
            <img src="/o1.png"></img>
            <h2 className="font-orbitron font-semibold">
              Deflationary Mechanics
            </h2>
            <p className="text-sm text-primary mt-3">
              25% of all protocol yield is automatically used to buy back and
              permanently burn $PRM tokens, creating a constantly decreased
              supply.
            </p>
            <span className="bg-[#151415] flex justify-between p-3 rounded">
              <p className="text-primary ">Burn Rate</p>
              <p className="font-semibold text-[#fb3748]">~45K $PRM/month</p>
            </span>
          </div>
          <div className="bg-[#0b0f12] md:p-8 p-4 grid gap-y-4 rounded-lg shadow">
            <img src="/o2.png"></img>
            <h2 className="font-orbitron font-semibold">
              Community Governance
            </h2>
            <p className="text-sm text-primary mt-3">
              $PRM holders ca participate in protocol governance, including
              yield strategy proposals, fee adjustments, and treasury
              allocations.
            </p>
            <span className="bg-[#151415] flex justify-center p-3 rounded ">
              <button className="border border-s border-[#12161c] rounded ">
                <a href="#">View Proposals ➜</a>
              </button>
            </span>
          </div>
          <div className="bg-[#0b0f12] md:p-8 p-4 grid gap-y-4 rounded-lg shadow">
            <img src="/o3.png"></img>
            <h2 className="font-orbitron font-semibold">Value Accural</h2>
            <p className="text-sm text-primary mt-3">
              As protocol TVL grows, buyback pressure increases. Combined with
              deflationary mechanics, $PRM becomes more scarce and valuable over
              time.
            </p>
            <span className="bg-[#151415] flex justify-between p-3 rounded">
              <p className="text-primary">Supply reduced</p>
              <p className="font-semibold text-secondary">28.47%</p>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
