/* Obtener un valor del array*/
let lucky=[13,17,'Star','*_*',3.14];
console.log(lucky);  //* imprime el array*//
console.log(lucky.length);  //Imprime el tamaño*//
console.log(lucky[3]);   //Imprime la posición length-1 //

//Adding elements//

let v=[];
v[0]="a";
//v[1]= 8;
console.log(v.length)   // Iimprime longitud de v//


lucky.push("a");  //añade al final del array otro valor//
console.log(lucky);  //* imprime el nuevo array*//
console.log(lucky.length);  //Imprime el nuevo tamaño*//
console.log(lucky[5]);

lucky.unshift(8);
console.log(lucky);  //* imprime el nuevo array*//
console.log(lucky.length);  //Imprime el nuevo tamaño*//
console.log(lucky[0]);