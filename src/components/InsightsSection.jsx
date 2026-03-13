export function InsightsSection() {
  return (
    <section className="px-8 my-25 py-12 md:py-20 md:px-20 xl:px-40 bg-[#010503]">
      <div className="grid gap-y-6 justify-center ">
        <h1 className="text-xl md:text-3xl text-center font-semibold">
          Explore Our Insights
        </h1>
        <p className="text-sm text-primary text-center">
          Gain a deeper understanding of our vision, strategies, and approach
          through our detailed documents.
        </p>
        <div className="grid gap-y-4 md:flex md:gap-x-5">
          <div className="p-4 border-[#052317] border-2 bg-[#020906] border-s rounded-lg shadow-md grid gap-y-10">
            <span className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-semibold">White Paper</h2>
              <img src="wpaper.png" alt="white_paper.png"></img>
            </span>
            <p className="md:text-base text-sm text-primary max-w-[85%]">
              Dive into our in-depth research, technical expertise, and
              innovative methodologies that drive real bussiness value.
            </p>
            <button className="p-2 w-fit cursor-pointer bg-[#1d1c1d] text-[#21855b] text-center rounded-lg">
              <a href="#">Read the white paper</a>
            </button>
          </div>

          <div className="p-4 border-[#052317] border-2 bg-[#020906] border-s rounded-lg shadow-md grid gap-y-10">
            <span className="flex justify-between items-center">
              <h2 className="text-xl md:text-2xl font-semibold">
                Investment Deck
              </h2>
              <img src="deck.png" alt="investment_deck.png"></img>
            </span>
            <p className="md:text-base text-sm text-primary max-w-[85%]">
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
  );
}
