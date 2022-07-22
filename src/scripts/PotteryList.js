import { usePottery } from "./PotteryCatalog.js";


export const PotteryList = () => {
    const pottery = usePottery()
    let htmlString = ``

    for(const pott of pottery){
        htmlString += `<section class="pottery" id="pottery--${pott.id}">
        <h2 class="pottery__shape">${pott.shape}</h2>
        <div class="pottery__properties">
            Item weighs ${pott.weight} grams and is ${pott.height} cm in height
        </div>
        <div class="pottery__price">
            Price is $${pott.price}
        </div>
    </section>`
    }
    
    return htmlString
}