let book={
    author: "Enrico",
    title: "Learning JS",
    for: "students",
    pages: 320,
    chapterPages: [90,50,60,140]
};

//Extraer valores de la matriz//
let au=Object.keys(book);
console.log(au);  
//
//extrae pares de valores//
let entradas=Object.entries(book);
console.log(entradas);

//

//Copia de objetos//
let book2 = book; /*Copia superficial del objetos, está referenciado al mismo object*/
console.log(book);
let book3 = Object.assign({},book) /* Copia real del objeto, lo duplica*/
console.log(book3);


