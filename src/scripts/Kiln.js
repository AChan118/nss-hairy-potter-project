export const firePottery = (madePott, numTemp) => {
    madePott.fired = true
   if(numTemp >= 2200)
    madePott.cracked = true
   else madePott.cracked = false
    return madePott
}
