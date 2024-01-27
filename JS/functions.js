


//VISUALIZAR EN PANTALLA   
// function displayValActuales(array) {
//     array.forEach(i=>{displayAct.innerHTML = array.join('')});
// }   

displayValActuales = array => array.forEach(i=>{displayAct.innerHTML = array.join('')});


// function borrar() {
//     valoresAct.length==1 ? (valoresAct = [] , displayAct.innerHTML = 0) : valoresAct.pop();
// }

borrar = () =>  valoresAct.length==1 ? (valoresAct = [] , displayAct.innerHTML = 0) : valoresAct.pop();



clear =()=>{
    valoresAct = [];
    displayAct.innerHTML = 0;
    displayAnt.innerHTML = 0;
    resultado.classList.add('oculto')
}

// function botonOp(elemento) { 
//     displayAnt.innerHTML = parseFloat(valoresAct.join(''));
//     valoresAct = [];
//     displayAct.innerHTML = 0;
//     state = elemento;
//     displayValActuales(valoresAct);
// }

botonOp = elemento => {
    //ACA DEPENDE QUE OP QUIERA HACER CAMBIO EL ESTADO 
    displayAnt.innerHTML = parseFloat(valoresAct.join(''));
    valoresAct = [];
    displayAct.innerHTML = 0;
    state = elemento;
    displayValActuales(valoresAct);
}


function realizarOp() {
    switch (state) {
        case 1:
            let res = parseFloat(displayAct.innerHTML) + parseFloat(displayAnt.innerHTML);
            resultado.classList.remove('oculto')
            resultado.innerHTML = res;
            arrayDeOp[0] = "+";
            break;
        case 2:
            let res1 = parseFloat(displayAnt.innerHTML) - parseFloat(displayAct.innerHTML);
            resultado.classList.remove('oculto')
            resultado.innerHTML = res1;
            arrayDeOp[0] = "-";
            break;
        case 3:
            let res2 = parseFloat(displayAnt.innerHTML) * parseFloat(displayAct.innerHTML);
            resultado.classList.remove('oculto')
            resultado.innerHTML = res2;
            arrayDeOp[0] = "X";
            break;
        case 4:
            let res3 = parseFloat(displayAnt.innerHTML) / parseFloat(displayAct.innerHTML);
            resultado.classList.remove('oculto')
            resultado.innerHTML = res3;
            arrayDeOp[0] = "/";
            break;
    }
}

// function agregarHistorial() {
//     let res1 = displayAct.textContent;
//     let res2 = displayAnt.textContent;
//     let resulArray = [];
//     let opRealizada = document.createElement("ul");
//     resulArray.push(res2)
//     resulArray.push(res1)
//     opRealizada.textContent = resulArray[0] + arrayDeOp[0] + resulArray[1] + " " + "= " + resultado.textContent;
//     resulHis.appendChild(opRealizada);
// }

agregarHistorial = ()=> {
    let res1 = displayAct.textContent;
    let res2 = displayAnt.textContent;
    let resulArray = [];
    let opRealizada = document.createElement("ul");
    resulArray.push(res2)
    resulArray.push(res1)
    opRealizada.textContent = resulArray[0] + arrayDeOp[0] + resulArray[1] + " " + "= " + resultado.textContent;
    resulHis.appendChild(opRealizada);
}