//clousure
"use strict" ;
function greeter(name) {
const myname = name
const hello = function () {     //asigna a hello los valores que se introducen en la funcion
return "Hello " + myname        //devuelve la cadena "Hello" mas los valores guardado en myname
}
return hello ;         //muestra hello completa
}
const helloTom = greeter("Tom")       //la variable name pasa a ser TOM
const helloJerry = greeter("Jerry")       //la variable name pasa a ser JERRY
console.log(helloTom ())
console.log(helloJerry ())