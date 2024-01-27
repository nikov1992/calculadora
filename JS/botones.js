

// inertext ( devuelve el texto interno de ese elemento STRING)

// tagName (nombre de etiqueta)

// // Convertir el array a un string con un delimitador
// var miString = miArray.join(', ');

// console.log(miString); // Esto imprimirá "1, 2, 3, 4, 5" en la consola



//FUNCTION(EVENT) // se utiliza el parametro evento cuando quiero que el navegador me proporcione informacion adicional , como por ejemplo el codigo de la tecla presionada , la posicion del mouse al hacer click ... etc ... si no necesito nada de esa info pudo obviar este parametro.

//KEYCODE ... anteriormente se utilizaba el keycode. pero es mejor utilizar EVENT.KEY para simplificar disposiciones de teclado , dado que este utiliza simbolos y no codigos ...


let valoresAct = [];
let valoresActDecimal = [];
let menuState = 0;
let state = 0; // este es mi state para ver que op hago 1=suma 2=resta 3=div 4=multi
let arrayDeOp = [];

let resulHis = document.getElementById('resHisto');
let displayAct = document.getElementById('valAct'); //valor actual a mostrar en el display
let displayAnt = document.getElementById('valAnt'); //valor actual a mostrar en el display
let resultado = document.getElementById('res'); //valor actual a mostrar en el display


let btn1 = document.getElementById('num1');
let btn2 = document.getElementById('num2');
let btn3 = document.getElementById('num3');
let btn4 = document.getElementById('num4');
let btn5 = document.getElementById('num5');
let btn6 = document.getElementById('num6');
let btn7 = document.getElementById('num7');
let btn8 = document.getElementById('num8');
let btn9 = document.getElementById('num9');
let btn0 = document.getElementById('num0');
let menu = document.getElementById('menu');
let histo = document.getElementById('histo');
let c = document.getElementById('c');
let erase = document.getElementById('borra');
let porcentaje = document.getElementById('porcentaje');
let suma = document.getElementById('sumar');
let multiplica = document.getElementById('multiplicar');
let resta = document.getElementById('restar');
let divide = document.getElementById('dividir');
let igual = document.getElementById('igual');

let arrayDeBotones = [btn1.value,btn2.value,btn3.value]
let arrayDeBotones2 = [btn1,btn2,btn3];


// clickRealizado = array => array.find(elem => elem == btn1) {

// }

// console.log(arrayDeBotones.find(elem => elem>=1 ))
// arrayDeBotones.forEach(i=>console.log(arrayDeBotones[i-1]));


// clickRealizado = array => {
//     array.forEach((i,index)=>)
// }

// clickRealizado(arrayDeBotones);


// console.log(arrayDeBotones[1].value)


