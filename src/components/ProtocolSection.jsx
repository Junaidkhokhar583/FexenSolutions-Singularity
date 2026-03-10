export function ProtocolSection(){
    return(
<section className="px-8 md:px-24">
        <div className="grid gap-y-3 justify-center items-center">
          <div className="grid gap-y-6 justify-items-center">
            <span className="bg-gray-700 p-2 rounded-full flex w-fit gap-x-2">
              <img src="/hertz.png" alt="lifeline.png"></img>
              <p className="text-secondary text-sm">LIVE PROTOCOL METRICS</p>
            </span>
            <h1 className="text-xl md:text-4xl">Real-Time Performance</h1>
            <p className="text-sm text-primary">
              Transparent, on-chain verified data updated every block
            </p>
          </div>

          <div className="grid md:grid-flow-col md:gap-x-4 mt-8 grid-flow-row gap-y-2">
            <div className="border border-s border-[#052115] rounded-lg">
              <div className="flex gap-x-2 justify-between p-4">
                <div className="grid gap-y-3 ">
                  <p className="text-xs text-primary">Total Value Locked</p>
                  <p className="text-xl">$1,250,000</p>
                  <span className="flex gap-x-1">
                    <img
                      src="/uparrow.png"
                      className="h-6 w-6"
                      alt="arrow.png"
                    ></img>
                    <p className="text-[#147c45]">+12.5%</p>
                  </span>
                  <p className="text-sm text-primary">
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
                  <p className="text-xs text-primary">Current Monthly ROI</p>
                  <p className="text-xl">8.0%</p>
                  <span className="flex gap-x-1">
                    <img
                      src="/downarrow.png"
                      className="h-6 w-6"
                      alt="downarrow.png"
                    ></img>
                    <p className="text-[#cd2e3c]">-0.8%</p>
                  </span>
                  <p className="text-sm text-primary">
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
                  <p className="text-xs text-primary">PRM Tokens Burned</p>
                  <p className="text-xl">2,847,392</p>
                  <span className="flex gap-x-1">
                    <img
                      src="/burn.png"
                      className="w-6 h-6"
                      alt="burn.png"
                    ></img>
                    <p className="text-[#efce3f]">142,847</p>
                  </span>
                  <p className="text-sm text-primary">
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
                <p className="text-primary">All-Time high ROI</p>
              </span>
              <span className="flex gap-x-3 p-4 md:border-l-2 border-l-0 md:border-t-0 border-t-2 border-s border-[#041a11]">
                <p>7.1%</p>
                <p className="text-primary">Average Monthly ROI</p>
              </span>
              <span className="flex gap-x-3 p-4 md:border-l-2 border-l-0 md:border-t-0 border-t-2 border-s border-[#041a11]">
                <p>8</p>
                <p className="text-primary">Active strategies</p>
              </span>
            </div>
          </div>
        </div>
      </section>
    )
}