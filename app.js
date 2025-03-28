"use strict"

let carsMap = new Map(
    [
        ['volvo', 'XC60'],
        ['toyota', 'camry'],
        ['porsche', 'panamera'],
    ]
)
// for (const [key, value] of carsMap) {
//     console.log(key);
//     console.log(value);
// }
// console.log([...carsMap]);
// console.log(carsMap);
  carsMap =  new Map([...carsMap].map(el => el.reverse()));
  console.log(carsMap)
  
  let numTest = new Map([
    [1, 6],
    [2, 16],
    [3, 256],
    [4, 1024],
  ])
  for ( const [key, value] of numTest) {
    console.log(key, Math.sqrt(value))
  }