// const potteryStart = {
//     pottery: [
//         {
//             id: 1,
//             shape:"Mug",
//             weight:5,
//             height:3,
//         },
//         {
//             id: 2,
//             shape:"Platter",
//             weight:3,
//             height:7, 
//         },
//         {
//             id: 3,
//             shape:"Mug",
//             weight:4,
//             height:4, 
//         },
//         {
//             id: 4,
//             shape:"Mug",
//             weight:1,
//             height:5, 
//         },
//         {
//             id: 5,
//             shape:"Mug",
//             weight:2,
//             height:6, 
//         },
//     ]
// }
let potteryNum = 1;
export const makePottery = (clayShape, clayWeight, clayHeight) => {
    const clayObject ={
            shape: clayShape,
            weight: clayWeight,
            height: clayHeight,
            id: potteryNum++
            
        }
    return clayObject
}




// id: 1,
// shape:"Mug",
// weight:5,
// height:3,