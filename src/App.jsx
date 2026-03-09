import "./App.css";
import { Header } from "./components/Header";
import { InfiniteCarousel } from "./components/InfiniteCarousel";
import { Progress } from "./components/ui/progress";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".imgAnimate");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });
    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Header />
      <section className="py-18 md:px-24 px-8">
        <div className="grid gap-y-12 justify-center">
          <div className="grid md:gap-y-10 gap-y-5 justify-center align-middle items-center content-center text-center">
            <span className="flex justify-self-center gap-x-2 mt-2 w-fit bg-[#151415] text-center border-2 border-s border-[#a42a35] shadow-xl rounded-lg p-2">
              <p className="text-xs">Now live on Mainnet</p>
              <img src="/live.png" alt="live.png"></img>
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-5xl">
              A New Era In{" "}
              <strong className="font-normal font-orbitron text-[#26ef99]">
                Decentralized <br />
                Institutional Access
              </strong>
            </h1>
            <p className="text-sm text-[#9696a5]">
              Experience historically modeled high-yielding returns, distributed
              weekly through our Institutional grade infrastructure. Your
              personal hedge fun, fully on-chain.
            </p>
            <span className="sm:flex grid sm:gap-x-4 gap-y-3 items-center justify-center">
              <span className=" rounded-md shadow-md hover:text-[#26ef99] border-2 border-gray-700 border-s bg-[#343234] p-2 cursor-pointer flex gap-x-2 ">
                <img src="/rocket.png" alt="user.png" className="w-6 h-6"></img>
                <a href="#">
                  <button className="cursor-pointer">Launch App</button>
                </a>
              </span>
              <span className=" rounded-md shadow-md text-black bg-[#26ef99] p-2 cursor-pointer flex gap-x-2">
                <img
                  src="/purchasetoken.png"
                  alt="user.png"
                  className="w-5 h-5"
                ></img>
                <a href="#">
                  <button className="cursor-pointer">Purchase Tokens</button>
                </a>
              </span>
            </span>
          </div>

          <div className="grid md:grid-flow-col md:gap-x-6 gap-x-1 px-1 sm:px-6 grid-flow-row gap-y-2">
            <div className="border border-s border-[#072016] rounded-lg">
              <div className="flex items-center p-4 justify-between">
                <div className="grid gap-y-1">
                  <p className="text-sm text-[#266349]">Audited by</p>
                  <p className="text-lg">CertiK</p>
                </div>
                <div className="align-middle">
                  <img src="/cont1.png" alt="shield.png"></img>
                </div>
              </div>
            </div>
            <div className="border border-s border-[#072016] rounded-lg">
              <div className="flex items-center p-4 justify-between">
                <div className="grid gap-y-1">
                  <p className="text-sm text-[#266349]">TVL</p>
                  <p className="text-lg">$1.25M+</p>
                </div>
                <div className="align-middle">
                  <img src="/cont2.png" alt="arrow.png"></img>
                </div>
              </div>
            </div>
            <div className="border border-s border-[#072016] rounded-lg">
              <div className="flex items-center p-4 justify-between">
                <div className="grid gap-y-1">
                  <p className="text-sm text-[#266349]">Active investors</p>
                  <p className="text-lg">500+</p>
                </div>
                <div className="align-middle">
                  <img src="/cont3.png" alt="star.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="md:my-30 my-8">
        <img src="/bgbox.png"></img>
      </section>

      <section className="px-8 md:px-24">
        <div className="grid gap-y-3 justify-center items-center">
          <div className="grid gap-y-6 justify-items-center">
            <span className="bg-gray-700 p-2 rounded-full flex w-fit gap-x-2">
              <img src="/hertz.png" alt="lifeline.png"></img>
              <p className="text-[#26ef99] text-sm">LIVE PROTOCOL METRICS</p>
            </span>
            <h1 className="text-xl md:text-4xl">Real-Time Performance</h1>
            <p className="text-sm text-[#505359]">
              Transparent, on-chain verified data updated every block
            </p>
          </div>

          <div className="grid md:grid-flow-col md:gap-x-4 mt-8 grid-flow-row gap-y-2">
            <div className="border border-s border-[#052115] rounded-lg">
              <div className="flex gap-x-2 justify-between p-4">
                <div className="grid gap-y-3 ">
                  <p className="text-xs text-[#505359]">Total Value Locked</p>
                  <p className="text-xl">$1,250,000</p>
                  <span className="flex gap-x-1">
                    <img
                      src="/uparrow.png"
                      className="h-6 w-6"
                      alt="arrow.png"
                    ></img>
                    <p className="text-[#147c45]">+12.5%</p>
                  </span>
                  <p className="text-sm text-[#505359]">
                    Assets under management.
                  </p>
                </div>

                <div>
                  <img src="/contt1.png" alt="money.png"></img>
                </div>
              </div>
            </div>
            <div className="border border-s border-[#052115] rounded-lg">
              <div className="flex gap-x-2 justify-between p-4">
                <div className="grid gap-y-3 ">
                  <p className="text-xs text-[#505359]">Current Monthly ROI</p>
                  <p className="text-xl">8.0%</p>
                  <span className="flex gap-x-1">
                    <img
                      src="/downarrow.png"
                      className="h-6 w-6"
                      alt="downarrow.png"
                    ></img>
                    <p className="text-[#cd2e3c]">-0.8%</p>
                  </span>
                  <p className="text-sm text-[#505359]">
                    Assets under management.
                  </p>
                </div>

                <div>
                  <img src="/contt2.png" alt="money.png"></img>
                </div>
              </div>
            </div>
            <div className="border border-s border-[#052115] rounded-lg">
              <div className="flex gap-x-2 justify-between p-4">
                <div className="grid gap-y-3 ">
                  <p className="text-xs text-[#505359]">PRM Tokens Burned</p>
                  <p className="text-xl">2,847,392</p>
                  <span className="flex gap-x-1">
                    <img
                      src="/burn.png"
                      className="w-6 h-6"
                      alt="burn.png"
                    ></img>
                    <p className="text-[#efce3f]">142,847</p>
                  </span>
                  <p className="text-sm text-[#505359]">
                    Assets under management.
                  </p>
                </div>

                <div>
                  <img src="/contt3.png" alt="money.png"></img>
                </div>
              </div>
            </div>
          </div>

          <div className="grid">
            <span className="w-full h-0.5 my-1 bg-[#041a11]"></span>
            <div className="grid md:grid-flow-col bg-[#010503]">
              <span className="flex gap-x-3 p-4">
                <p>9.2%</p>
                <p className="text-[#505359]">All-Time high ROI</p>
              </span>
              <span className="flex gap-x-3 p-4 md:border-l-2 border-l-0 md:border-t-0 border-t-2 border-s border-[#041a11]">
                <p>7.1%</p>
                <p className="text-[#505359]">Average Monthly ROI</p>
              </span>
              <span className="flex gap-x-3 p-4 md:border-l-2 border-l-0 md:border-t-0 border-t-2 border-s border-[#041a11]">
                <p>8</p>
                <p className="text-[#505359]">Active strategies</p>
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 my-20 md:px-20 xl:px-40">
        <div className="grid gap-y-6 justify-center ">
          <h1 className="text-xl md:text-3xl text-center font-semibold">
            Explore Our Insights
          </h1>
          <p className="text-sm text-[#505359] text-center">
            Gain a deeper understanding of our vision, strategies, and approach
            through our detailed documents.
          </p>
          <div className="grid gap-y-2 md:flex md:gap-x-2">
            <div className="p-4 border-[#052317] border-2 bg-[#020906] border-s rounded-lg shadow-md grid gap-y-4">
              <span className="flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-semibold">
                  White Paper
                </h2>
                <img src="wpaper.png" alt="white_paper.png"></img>
              </span>
              <p className=" text-sm text-[#505359]">
                Dive into our in-depth research, technical expertise, and
                innovative methodologies that drive real bussiness value.
              </p>
              <button className="p-2 w-fit cursor-pointer bg-[#1d1c1d] text-[#21855b] text-center rounded-lg">
                <a href="#">Read the white paper</a>
              </button>
            </div>

            <div className="p-4 border-[#052317] border-2 bg-[#020906] border-s rounded-lg shadow-md grid gap-y-4">
              <span className="flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-semibold">
                  Investment Deck
                </h2>
                <img src="deck.png" alt="investment_deck.png"></img>
              </span>
              <p className="text-sm text-[#505359]">
                Explore our strategic overview, growth roadmap and value
                proposition designed for investors and stakeholders.
              </p>
              <button className="p-2 w-fit cursor-pointer bg-[#1d1c1d] text-[#21855b] text-center rounded-lg">
                <a href="#">View Investment Deck</a>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="my-20 md:px-50">
        <div className="grid gap-y-3">
          <h1 className="text-2xl text-center font-semibold">
            {" "}
            Presale - Get In Early
          </h1>
          <div className="p-4">
            <div className="rounded-lg grid gap-y-4 border-[#18181a] border border-s shadow-md p-4 bg-[#0b0f12]">
              <span className="flex justify-between">
                <p>32% raised</p>
                <p>Price : 1$ RPM - $0.10</p>
              </span>
              <span>
                <Progress value={32} />
              </span>
              <span className="flex justify-between">
                <p>$120,363</p>
                <p>$600,000</p>
              </span>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-[#0b1116] p-6 shadow-xl">
          <h2 className="text-center text-2xl font-semibold text-white mb-6 font-orbitron">
            Buy Token
          </h2>

          <div className="mb-5 rounded-xl bg-black/60 border border-white/5 p-4">
            <p className="text-sm text-gray-400 mb-2">You Pay</p>

            <div className="flex items-center justify-between gap-4">
              <input
                type="number"
                value={{}}
                onChange={{}}
                placeholder="0.00"
                className="bg-transparent text-3xl font-semibold text-white outline-none w-full"
              />

              <div className="relative">
                <select
                  value={{}}
                  onChange={{}}
                  className="appearance-none bg-white text-black font-medium rounded-lg px-4 py-2 pr-8 text-sm cursor-pointer"
                >
                  <option value="USDT">USDT</option>
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                </select>

                <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center text-black text-xs">
                  ▼
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6 rounded-xl bg-black/60 border border-white/5 p-4">
            <p className="text-sm text-gray-400 mb-2">You Get</p>

            <div className="flex items-center justify-between">
              <span className="text-3xl font-semibold text-white">0.00</span>

              <div className="ml-4 flex items-center gap-2 rounded-lg bg-black border border-white/10 px-4 py-2 text-sm font-medium text-white">
                <div className="w-3 h-3 rounded-full bg-green-400" />
                $PRM
              </div>
            </div>
          </div>

          <button className="w-full rounded-xl bg-gradient-to-r from-green-400 to-emerald-400 py-4 text-lg font-semibold text-black hover:brightness-110 transition">
            Purchase $PRM
          </button>
        </div>
      </section>

      <section className="my-25">
        <div className="grid gap-y-6 justify-items-center">
          <h1 className="font-orbitron md:text-3xl text-xl">
            Order Book Integeration
          </h1>
          <InfiniteCarousel />
        </div>
      </section>

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
                <span className="text-[#21bd7a] text-sm p-2 rounded-full bg-[#13261d] border border-s border-[#11432d]">
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

            <div className="bg-[#26ef99] grid justify-center gap-y-2 px-10 py-5 rounded-lg shadow md:w-1/3 text-center">
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

      <section className="bg-[#010503] my-10 md:px-20 px-5 py-8">
        <div className="grid gap-y-4 justify-center text-center">
          <img
            src="/theteam.png"
            alt="team.png"
            className="justify-self-center"
          ></img>
          <h1 className="md:text-3xl text-lg font-semibold font-orbitron">
            Built By Industry Veterans
          </h1>
          <p className="text-[#82838f] text-sm text-center">
            A world-class team with deep expertise in traditional finance,
            blockchain technology, and qualitative research.
          </p>
        </div>

        <div className="grid md:grid-flow-col my-15 md:gap-x-4 grid-flow-row gap-y-10">
          <div className="grid gap-y-3 w-fit justify-items-center">
            <img src="/p1.png" alt="person.png"></img>
            <img src="/divider.png" alt="line.png"></img>
            <h3 className="text-lg">Alex Chen</h3>
            <p className="text-[#26ef99] text-sm">CEO & FOUNDER</p>
            <p className="text-sm text-[#a6a3a6] text-center">
              Former Goldman Sachs VP with 10+ years in quantitative trading and
              Defi protocol design.
            </p>
            <span className="flex gap-x-2 items-center">
              <img src="/twitter.png" alt="twitter.png"></img>
              <img src="/linkdin.png" alt="linkdin.png"></img>
              <img src="/github.png" alt="github.png"></img>
            </span>
          </div>

          <div className="grid gap-y-3 w-fit justify-items-center">
            <img src="/p2.png" alt="person.png"></img>
            <img src="/divider.png" alt="line.png"></img>
            <h3 className="text-lg">Sara Mitchel</h3>
            <p className="text-[#26ef99] text-sm">Chief Technology Officer</p>
            <p className="text-sm text-[#a6a3a6] text-center">
              Ex-Chainlink engineer, smart, and contract specialist with 5+
              years building secure Defi primitives.
            </p>
            <span className="flex gap-x-2 items-center">
              <img src="/twitter.png" alt="twitter.png"></img>
              <img src="/linkdin.png" alt="linkdin.png"></img>
              <img src="/github.png" alt="github.png"></img>
            </span>
          </div>

          <div className="grid gap-y-3 w-fit justify-items-center">
            <img src="/p3.png" alt="person.png"></img>
            <img src="/divider.png" alt="line.png"></img>
            <h3 className="text-lg">Marcus Rodriguez</h3>
            <p className="text-[#26ef99] text-sm">Head of Strategy</p>
            <p className="text-sm text-[#a6a3a6] text-center">
              Former Bridgewater Associates strategist. Expert in Institutional
              portfolio management.
            </p>
            <span className="flex gap-x-2 items-center">
              <img src="/twitter.png" alt="twitter.png"></img>
              <img src="/linkdin.png" alt="linkdin.png"></img>
              <img src="/github.png" alt="github.png"></img>
            </span>
          </div>

          <div className="grid gap-y-3 w-fit justify-items-center">
            <img src="/p4.png" alt="person.png"></img>
            <img src="/divider.png" alt="line.png"></img>
            <h3 className="text-lg">Dr. Emily Zhang</h3>
            <p className="text-[#26ef99] text-sm">Lead Researcher</p>
            <p className="text-sm text-[#a6a3a6] text-center">
              PhD in Financial Engineering from MIT. Specialized in algorithmic
              trading and risk models.
            </p>
            <span className="flex gap-x-2 items-center">
              <img src="/twitter.png" alt="twitter.png"></img>
              <img src="/linkdin.png" alt="linkdin.png"></img>
              <img src="/github.png" alt="github.png"></img>
            </span>
          </div>
        </div>
      </section>

      <section className="md:px-25 px-6 py-6 bg-[#0a0a0a]">
        <div className="grid gap-y-4 text-center">
          <h1 className="text-2xl md:text-4xl font-semibold font-orbitron">
            Ecosystem Partners
          </h1>
          <p className="md:text-sm text-lg text-[#a0a0b0]">
            A world-class team with deep expertise in traditional finance,
            blockchain technology, and quantitative research.
          </p>
        </div>

        <div className="grid md:grid-cols-5 grid-cols-2 mt-4 gap-x-4 gap-y-2 justify-self-center">
          <img
            className="imgAnimate section"
            src="/i1.png"
            alt="frame.png"
          ></img>
          <img
            className="imgAnimate section"
            src="/i2.png"
            alt="frame.png"
          ></img>
          <img
            className="imgAnimate section"
            src="/i3.png"
            alt="frame.png"
          ></img>
          <img
            className="imgAnimate section"
            src="/i4.png"
            alt="frame.png"
          ></img>
          <img
            className="imgAnimate section"
            src="/i5.png"
            alt="frame.png"
          ></img>
          <img
            className="imgAnimate section"
            src="/i6.png"
            alt="frame.png"
          ></img>
          <img
            className="imgAnimate section"
            src="/i7.png"
            alt="frame.png"
          ></img>
          <img
            className="imgAnimate section"
            src="/i8.png"
            alt="frame.png"
          ></img>
          <img
            className="imgAnimate section"
            src="/i9.png"
            alt="frame.png"
          ></img>
          <img
            className="imgAnimate section"
            src="/i10.png"
            alt="frame.png"
          ></img>
          <img
            className="imgAnimate section"
            src="/i11.png"
            alt="frame.png"
          ></img>
          <img
            className="imgAnimate section"
            src="/i12.png"
            alt="frame.png"
          ></img>
          <img
            className="imgAnimate section"
            src="/i13.png"
            alt="frame.png"
          ></img>
          <img
            className="imgAnimate section"
            src="/i14.png"
            alt="frame.png"
          ></img>
        </div>
      </section>

      <section className="md:px-20 px-6 py-6 my-5">
        <div className="grid gap-y-6">
          <div className="grid gap-y-8">
            <img src="/token1.png" alt="tokenomics.png"></img>
            <h1 className="md:text-4xl text-xl">$PRM Token Economics</h1>
            <p className="md:text-sm text-lg text-[#a6a3a6]">
              Designed to align long-term incentives across participants,
              ensuring sustainable growth and protocol resilience.
              <br />
              Utility-driven token model powering governance, access, and value
              capture within the ecosystem.
            </p>
          </div>

          <div className="grid md:grid-cols-6 grid-cols-2 gap-y-4 gap-x-2">
            <div className="bg-[#0b0f12] rounded-lg shadow grid gap-y-2 justify-items-center py-8">
              <p className="text-sm text-[#9c9a9d]">Total Supply</p>
              <h3 className="font-semibold">
                10,000,000 <strong className="text-[#a0a0b0]">$PRM</strong>
              </h3>
            </div>

            <div className="bg-[#0b0f12] rounded-lg shadow grid gap-y-2 justify-items-center py-8">
              <p className="text-sm text-[#9c9a9d]">Circulating Supply</p>
              <h3 className="font-semibold">
                7,152,608 <strong className="text-[#a0a0b0]">$PRM</strong>
              </h3>
            </div>

            <div className="bg-[#0b0f12] rounded-lg shadow grid gap-y-2 justify-items-center py-8">
              <p className="text-sm text-[#9c9a9d]">Burned to Date</p>
              <h3 className="font-semibold">
                2,847,392 <strong className="text-[#a0a0b0]">$PRM</strong>
              </h3>
            </div>

            <div className="bg-[#0b0f12] rounded-lg shadow grid gap-y-2 justify-items-center py-8">
              <p className="text-sm text-[#9c9a9d]">Market Cap</p>
              <h3 className="font-semibold">
                $1.02 <strong className="text-[#a0a0b0]">M</strong>
              </h3>
            </div>

            <div className="bg-[#0b0f12] rounded-lg shadow grid gap-y-2 justify-items-center py-8">
              <p className="text-sm text-[#9c9a9d]">Current Price</p>
              <h3 className="font-semibold">
                $0.142 <strong className="text-[#a0a0b0]">USD</strong>
              </h3>
            </div>

            <div className="bg-[#0b0f12] rounded-lg shadow grid gap-y-2 justify-items-center py-8">
              <p className="text-sm text-[#9c9a9d]">24h Volume</p>
              <h3 className="font-semibold">
                $245,678 <strong className="text-[#a0a0b0]">USD</strong>
              </h3>
            </div>
          </div>

          <div className="md:flex md:gap-x-4 grid gap-y-3">
            <div className="bg-[#0b0f12] rounded-xl shadow-lg px-5 py-10 grid gap-y-8 md:w-5/12">
              <span className="flex justify-between">
                <h3 className="font-semibold">TOTAL SUPPLY</h3>
                <h3 className="text-[#26ef99] font-semibold">
                  100,000,000 $PRM
                </h3>
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
                    <p className="text-[#26ef99]">55%</p>
                    <button className="border border-s border-[#042815] bg-[#042815] px-5 py-1 rounded-full text-sm text-[#26ef99]">
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
                    <p className="text-[#26ef99]">12%</p>
                    <button className="border border-s border-[#042815] bg-[#042815] px-5 py-1 rounded-full text-sm text-[#26ef99]">
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
                    <p className="text-[#26ef99]">12%</p>
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
                    <p className="text-[#26ef99]">09%</p>
                    <button className="border border-s border-[#042815] bg-[#042815] px-5 py-1 rounded-full text-sm text-[#26ef99]">
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
                    <p className="text-[#26ef99]">12%</p>
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
              <p className="text-sm text-[#939093] mt-3">
                25% of all protocol yield is automatically used to buy back and
                permanently burn $PRM tokens, creating a constantly decreased
                supply.
              </p>
              <span className="bg-[#151415] flex justify-between p-3 rounded">
                <p className="text-[#939093] ">Burn Rate</p>
                <p className="font-semibold text-[#fb3748]">~45K $PRM/month</p>
              </span>
            </div>
            <div className="bg-[#0b0f12] md:p-8 p-4 grid gap-y-4 rounded-lg shadow">
              <img src="/o2.png"></img>
              <h2 className="font-orbitron font-semibold">
                Community Governance
              </h2>
              <p className="text-sm text-[#939093] mt-3">
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
              <p className="text-sm text-[#939093] mt-3">
                As protocol TVL grows, buyback pressure increases. Combined with
                deflationary mechanics, $PRM becomes more scarce and valuable
                over time.
              </p>
              <span className="bg-[#151415] flex justify-between p-3 rounded">
                <p className="text-[#939093]">Supply reduced</p>
                <p className="font-semibold text-[#1eab60]">28.47%</p>
              </span>
            </div>
          </div>
        </div>
      </section>

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


    </>
  );
}

export default App;
