export function Footer(){
    return(

    <>
    <section className="md:px-20 px-6 py-6 mt-5 bg-[#0a0a0f] ">
    <div className="md:flex grid md:gap-x-20 gap-y-10 ">

        <div className="grid gap-y-4 md:w-1/3">
            <img src="/singularity.png"></img>
            <p className="text-sm text-primary md:text-balance">Democratizing institutional grade yield generation through transparent, on-chain infrastructure.</p>
            <div className="flex gap-x-4 w-fit justify-between">
                <img src="/link1.png" alt="link.png"></img>
                <img src="/link2.png" alt="link.png"></img>
                <img src="/link3.png" alt="link.png"></img>
                <img src="/link4.png" alt="link.png"></img>
            </div>
        </div>

        <div className="grid md:grid-cols-4 grid-cols-2 md:gap-x-4 gap-y-2 md:w-2/3">
            <div className="grid gap-y-2">
                <h3 className="font-bold text-white text-lg">PRODUCT</h3>
                <span className="flex gap-x-1 text-primary mt-3"><a href="#">Invest</a><img src="/diagnolarrow.png" alt="arrow.png" className="w-5 h-5"></img> </span>
                <span className="flex gap-x-1 text-primary"><a href="#">Tokenomics</a><img src="/diagnolarrow.png" alt="arrow.png" className="w-5 h-5"></img> </span>
                <span className="flex gap-x-1 text-primary"><a href="#">Roadmap</a><img src="/diagnolarrow.png" alt="arrow.png" className="w-5 h-5"></img> </span>
                <span className="flex gap-x-1 text-primary"><a href="#">Security</a><img src="/diagnolarrow.png" alt="arrow.png" className="w-5 h-5"></img> </span>
            </div>

            <div className="grid gap-y-2">
                <h3 className="font-bold text-white text-lg">RESOURCES</h3>
                <span className="flex gap-x-1 text-primary mt-3"><a href="#">Documentation</a><img src="/diagnolarrow.png" alt="arrow.png" className="w-5 h-5"></img> </span>
                <span className="flex gap-x-1 text-primary"><a href="#">Whitepaper</a><img src="/diagnolarrow.png" alt="arrow.png" className="w-5 h-5"></img> </span>
                <span className="flex gap-x-1 text-primary"><a href="#">Github</a><img src="/diagnolarrow.png" alt="arrow.png" className="w-5 h-5"></img> </span>
                <span className="flex gap-x-1 text-primary"><a href="#">API</a><img src="/diagnolarrow.png" alt="arrow.png" className="w-5 h-5"></img> </span>
            </div>

            <div className="grid gap-y-2">
                <h3 className="font-bold text-white text-lg">COMMUNITY</h3>
                <span className="flex gap-x-1 text-primary mt-3"><a href="#">Twitter</a><img src="/diagnolarrow.png" alt="arrow.png" className="w-5 h-5"></img> </span>
                <span className="flex gap-x-1 text-primary"><a href="#">Discord</a><img src="/diagnolarrow.png" alt="arrow.png" className="w-5 h-5"></img> </span>
                <span className="flex gap-x-1 text-primary"><a href="#">Telegram</a><img src="/diagnolarrow.png" alt="arrow.png" className="w-5 h-5"></img> </span>
                <span className="flex gap-x-1 text-primary"><a href="#">Blog</a><img src="/diagnolarrow.png" alt="arrow.png" className="w-5 h-5"></img> </span>
            </div>

            <div className="grid gap-y-2">
                <h3 className="font-bold text-white text-lg">LEGAL</h3>
                <span className="flex gap-x-1 text-primary mt-3"><a href="#">Terms of Services</a><img src="/diagnolarrow.png" alt="arrow.png" className="w-5 h-5"></img> </span>
                <span className="flex gap-x-1 text-primary"><a href="#">Privacy Policy</a><img src="/diagnolarrow.png" alt="arrow.png" className="w-5 h-5"></img> </span>
                <span className="flex gap-x-1 text-primary"><a href="#">Risk Disclosure</a><img src="/diagnolarrow.png" alt="arrow.png" className="w-5 h-5"></img> </span>
                <span className="flex gap-x-1 text-primary"><a href="#">Audits</a><img src="/diagnolarrow.png" alt="arrow.png" className="w-5 h-5"></img> </span>
            </div>

        </div>

    </div>

        <div className="w-full md:h-px h-0.5 bg-[#181719] rounded-xl my-10"></div>

        <div className="md:flex md:justify-between grid gap-y-11">
            <span className="text-sm text-primary">{Date().slice(11,15)} Singularity Protocol. All rights reserved.</span>


        <span className="text-sm text-primary md:text-right">Disclaimer: Cryptocurrency Investments carry high risk. Past performance does not gurantee future <br/>results. Please read our Risk Disclosure before Investing.</span>
        </div>
</section>
    </>
    )
}