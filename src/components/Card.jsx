export function Card({img,name,title,description}){
    return(
        <>
        <div className="grid gap-y-3 w-fit justify-items-center">
            <img src={img} alt="person.png"></img>
            <img src="/divider.png" alt="line.png"></img>
            <h3 className="text-lg">{name}</h3>
            <p className="text-secondary text-sm">{title}</p>
            <p className="text-sm text-[#a6a3a6] text-center">
             {description}
            </p>
            <span className="flex gap-x-2 items-center">
              <img src="/twitter.png" alt="twitter.png"></img>
              <img src="/linkdin.png" alt="linkdin.png"></img>
              <img src="/github.png" alt="github.png"></img>
            </span>
          </div>
        </>
    )
}