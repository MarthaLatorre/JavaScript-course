point={x:2,y:5};

let ent=Object.entries(point);
console.log(ent);

//Modificar objetos//
Object.assign(point,{z:5});
console.log(point);

//
let new_p = {...point, w:11}
console.log(new_p)