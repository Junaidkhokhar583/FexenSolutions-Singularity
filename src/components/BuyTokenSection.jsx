import { Progress } from "./ui/progress";

export function BuyTokenSection() {
  return (
    <section className="my-20 px-5 md:px-40 lg:60 xl:px-90 2xl:px-135">
      <div className="grid gap-y-3">
        <h1 className="text-2xl text-center font-semibold">
          {" "}
          Presale - Get In Early
        </h1>
        <div className="rounded-lg border-[#18181a] border border-s shadow-md p-4 bg-[#0b0f12]">
          <div className=" grid gap-y-4">
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

      <div className="rounded-2xl bg-[#0b1116] p-6 shadow-xl mt-4">
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
  );
}
