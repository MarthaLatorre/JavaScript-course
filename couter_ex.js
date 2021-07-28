"use strict" ;
function counter() {
let value = 0 ;         // let c=0;
const increment = () => {
value++;                // c=c+1; return c
return value;
}
return increment;
}

//
const count1 = counter() ;  //let count1 = counter();
console.log(count1()) ;
console.log(count1()) ;
console.log(count1()) ;

let count2= counter() ;     // inicia otro contador
console.log(count2()) ;