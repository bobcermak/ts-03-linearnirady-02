let x_start:number = 6
let n_pocet:number 
let c_nextNumber:number = 4
let s_continue:number



n_pocet = 1

console.log(x_start)

while (c_nextNumber <= 168) {
  c_nextNumber = x_start += 4
  n_pocet += 1
  if(c_nextNumber % 5 === 0 && c_nextNumber % 3 === 0) {
    continue
  }
  if(c_nextNumber === 170){
    continue
  }
  console.log(c_nextNumber)

}

