export function Hero(){
    return(
      <section className="py-18 md:px-24 px-8">
        <div className="grid gap-y-12 justify-center">
          <div className="grid md:gap-y-10 gap-y-5 justify-center align-middle items-center content-center text-center">
            <span className="flex justify-self-center gap-x-2 mt-2 w-fit bg-[#151415] text-center border-2 border-s border-[#a42a35] shadow-xl rounded-lg p-2">
              <p className="text-xs">Now live on Mainnet</p>
              <img src="/live.png" alt="live.png"></img>
            </span>
            <h1 className="text-2xl md:text-3xl lg:text-5xl">
              A New Era In{" "}
              <strong className="font-normal font-orbitron text-secondary">
                Decentralized <br />
                Institutional Access
              </strong>
            </h1>
            <p className="text-sm text-primary">
              Experience historically modeled high-yielding returns, distributed
              weekly through our Institutional grade infrastructure. Your
              personal hedge fun, fully on-chain.
            </p>
            <span className="sm:flex grid sm:gap-x-4 gap-y-3 items-center justify-center">
              <span className=" rounded-md shadow-md hover:text-secondary border-2 border-gray-700 border-s bg-[#343234] p-2 cursor-pointer flex gap-x-2 ">
                <img src="/rocket.png" alt="user.png" className="w-6 h-6"></img>
                <a href="#">
                  <button className="cursor-pointer">Launch App</button>
                </a>
              </span>
              <span className=" rounded-md shadow-md text-black bg-secondary p-2 cursor-pointer flex gap-x-2">
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
    )
}