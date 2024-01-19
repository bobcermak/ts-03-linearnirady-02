let x_start:number = 6
let n_pocet:number 
let c_nextNumber:number = 4
let s_continue:number



n_pocet = 1

console.log(x_start)

while (n_pocet <= 168) {

  if(x_start) {
    c_nextNumber = x_start += 4
    n_pocet += 1

    if(c_nextNumber % 5 === 0 && c_nextNumber % 3 === 0) {
      continue
    }
    console.log(c_nextNumber)
  }
}