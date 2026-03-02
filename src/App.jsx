import './App.css'
import { Header } from './components/Header'

function App() {
 
  return (
    <>
      <Header/>
      <section className="py-18 md:px-24 px-8">
          <div className="grid gap-y-12 justify-center">
                <div className="grid md:gap-y-10 gap-y-5 justify-center align-middle items-center content-center text-center">
                  <span className='flex justify-self-center gap-x-2 mt-2 w-fit bg-[#151415] text-center border-2 border-s border-[#a42a35] shadow-xl rounded-lg p-2'>
                    <p className='text-xs'>Now live on Mainnet</p>
                    <img src="/live.png" alt='live.png' ></img>
                    </span>
                  <h1 className='text-2xl md:text-3xl lg:text-5xl'>A New Era In <strong className='font-normal font-orbitron text-[#26ef99]'>Decentralized <br/>Institutional Access</strong></h1>
                  <p className='text-sm text-[#9696a5]'>Experience historically modeled high-yielding returns, distributed weekly through our Institutional grade infrastructure. Your personal hedge fun, fully on-chain.</p>
                  <span className="sm:flex grid sm:gap-x-4 gap-y-3 items-center justify-center">
                     <span className=" rounded-md shadow-md hover:text-[#26ef99] border-2 border-gray-700 border-s bg-[#343234] p-2 cursor-pointer flex gap-x-2 ">
                <img src="/launchapp.png" alt="user.png" width={16} height={12}></img>
            <a href="#">
              <button className="cursor-pointer">
                Launch App
              </button>
            </a>
            </span>
                     <span className=" rounded-md shadow-md text-black bg-[#26ef99] p-2 cursor-pointer flex gap-x-2">
                <img src="/purchasetoken.png" alt="user.png" width={16} height={12}></img>
            <a href="#">
              <button className="cursor-pointer">
                Purchase Tokens
              </button>
            </a>
            </span>
                  </span>
                </div>

            <div className="grid md:grid-flow-col md:gap-x-6 gap-x-1 px-1 sm:px-6 grid-flow-row gap-y-2">
              <div className='border border-s border-[#072016] rounded-lg'>
                <div className='flex items-center p-4 justify-between'>
                  <div className='grid gap-y-1'>
                    <p className='text-sm text-[#266349]' >Audited by</p>
                    <p className='text-lg'>CertiK</p>
                  </div>
                  <div className='align-middle'><img src='/cont1.png' alt='shield.png'></img></div>
                </div>
              </div>
              <div className='border border-s border-[#072016] rounded-lg'>
                <div className='flex items-center p-4 justify-between'>
                  <div className='grid gap-y-1'>
                    <p className='text-sm text-[#266349]'>TVL</p>
                    <p className='text-lg'>$1.25M+</p>
                  </div>
                  <div className='align-middle'><img src='/cont2.png' alt='arrow.png'></img></div>
                </div>
              </div>
              <div className='border border-s border-[#072016] rounded-lg'>
                <div className='flex items-center p-4 justify-between'>
                  <div className='grid gap-y-1'>
                    <p className='text-sm text-[#266349]' >Active investors</p>
                    <p className='text-lg'>500+</p>
                  </div>
                  <div className='align-middle'><img src='/cont3.png' alt='star.png'></img></div>
                </div>
              </div>
             
            </div>
          </div>
      </section>

      <section className='md:my-30 my-8'>
        <img src='/bgbox.png'></img>
      </section>

      <section className='px-8 md:px-24'>
            <div className='grid gap-y-3 justify-center items-center'>
                <div className='grid gap-y-6 justify-items-center'>
                  <span className='bg-gray-700 p-2 rounded-full flex w-fit gap-x-2'>
                    <img src='/hertz.png' alt='lifeline.png'></img>
                    <p className='text-[#26ef99] text-sm'>LIVE PROTOCOL METRICS</p>
                  </span>
                  <h1 className='text-xl md:text-4xl'>Real-Time Performance</h1>
                  <p className= 'text-sm text-[#505359]'>Transparent, on-chain verified data updated every block</p>
                </div>

                <div className='grid md:grid-flow-col md:gap-x-4 mt-8 grid-flow-row gap-y-2'>
                  <div className='border border-s border-[#052115] rounded-lg'>
                    <div className='flex gap-x-2 justify-between p-4'>
                      <div className='grid gap-y-3 '>
                        <p className='text-xs text-[#505359]'>Total Value Locked</p>
                        <p className='text-xl'>$1,250,000</p>
                        <span className='flex gap-x-1'>
                          <img src='/arrow1.png' alt='arrow.png'></img>
                          <p className='text-[#147c45]'>+12.5%</p>
                          </span>
                        <p className='text-sm text-[#505359]'>Assets under management.</p>
                      </div>

                      <div><img src='/contt1.png' alt='money.png'></img></div>
                    </div>
                  </div>
                  <div className='border border-s border-[#052115] rounded-lg'>
                    <div className='flex gap-x-2 justify-between p-4'>
                      <div className='grid gap-y-3 '>
                        <p className='text-xs text-[#505359]'>Current Monthly ROI</p>
                        <p className='text-xl'>8.0%</p>
                        <span className='flex gap-x-1'>
                          <img src='/darrow.png' alt='downarrow.png'></img>
                          <p className='text-[#cd2e3c]'>-0.8%</p>
                          </span>
                        <p className='text-sm text-[#505359]'>Assets under management.</p>
                      </div>

                      <div><img src='/contt2.png' alt='money.png'></img></div>
                    </div>
                  </div>
                  <div className='border border-s border-[#052115] rounded-lg'>
                    <div className='flex gap-x-2 justify-between p-4'>
                      <div className='grid gap-y-3 '>
                        <p className='text-xs text-[#505359]'>PRM Tokens Burned</p>
                        <p className='text-xl'>2,847,392</p>
                        <span className='flex gap-x-1'>
                          <img src='/litfire.png' alt='burn.png'></img>
                          <p className='text-[#efce3f]'>142,847</p>
                          </span>
                        <p className='text-sm text-[#505359]'>Assets under management.</p>
                      </div>

                      <div><img src='/contt3.png' alt='money.png'></img></div>
                    </div>
                  </div>
                </div>

                <div className='grid'>
                  <span className='w-full h-0.5 my-5 bg-[#041a11]'></span>
                  <div className=''></div>
                </div>

            </div>
      </section>
    </>
  )
}

export default App
