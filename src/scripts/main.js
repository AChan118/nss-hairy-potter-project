// Imports go first
import { makePottery } from "./PotteryWheel.js"
import { firePottery } from "./Kiln.js"
import { toSellOrNotToSell } from "./PotteryCatalog.js"
import { PotteryList } from "./PotteryList.js";
// Make 5 pieces of pottery at the wheel
let makeMug = makePottery( "Mug", 5, 6)
let makeChallas = makePottery("Challas", 3, 7)
let makePlatter = makePottery("Platter", 4, 2)
let makeBowl = makePottery("Bowl", 2, 4)
let makePlate = makePottery("Plate", 3, 2)

// Fire each piece of pottery in the kiln
let fireMug = firePottery(makeMug, 2150 )
let fireChallas = firePottery(makeChallas, 2100 )
let firePlatter = firePottery(makePlatter, 1900 )
let fireBowl = firePottery(makeBowl, 2000 )
let firePlate = firePottery(makePlate, 2300 )

// Determine which ones should be sold, and their price
let sellMug = toSellOrNotToSell(fireMug)
let sellChallas = toSellOrNotToSell(fireChallas)
let sellPlatter = toSellOrNotToSell(firePlatter)
let sellBowl = toSellOrNotToSell(fireBowl)
let sellPlate = toSellOrNotToSell(firePlate)

// Invoke the component function that renders the HTML list

const parentHTMLElement = document.querySelector(".potteryList")

parentHTMLElement.innerHTML = PotteryList()

