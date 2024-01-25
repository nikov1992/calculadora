//lectura por teclado
document.addEventListener('keydown', function (event) {
    switch (event.key) {
        case "1":
            valoresAct.push(1);
            displayValActuales(valoresAct);
            break;

        case "2":
            valoresAct.push(2);
            displayValActuales(valoresAct);
            break;

        case "3":
            valoresAct.push(3);
            displayValActuales(valoresAct);
            break;

        case "4":
            valoresAct.push(4);
            displayValActuales(valoresAct);
            break;

        case "5":
            valoresAct.push(5);
            displayValActuales(valoresAct);
            break;

        case "6":
            valoresAct.push(6);
            displayValActuales(valoresAct);
            break;

        case "7":
            valoresAct.push(7);
            displayValActuales(valoresAct);
            break;

        case "8":
            valoresAct.push(8);
            displayValActuales(valoresAct);
            break;

        case "8":
            valoresAct.push(9);
            displayValActuales(valoresAct);
            break;

        case "9":
            valoresAct.push(0);
            displayValActuales(valoresAct);
            break;

        case "0":
            valoresAct.push(0);
            displayValActuales(valoresAct);
            break;

        case "+":
            botonOp(1);
            suma.classList.add('presionado')
            break;
        case "-":
            botonOp(2)
            resta.classList.add('presionado')
            break;
        case "*":
            multiplica.classList.add('presionado')
            botonOp(3)
            break;
        case "/":
            divide.classList.add('presionado')
            botonOp(4)
            break;
        case "=":
            suma.classList.remove('presionado')
            resta.classList.remove('presionado')
            multiplica.classList.remove('presionado')
            divide.classList.remove('presionado')
            realizarOp()
            displayValActuales(valoresAct);
            agregarHistorial();
            valoresAct = [];
            displayAct.innerHTML = 0;
            displayAnt.innerHTML = 0;123
            // clear();
            break;

        case "c": //clear
            clear();
            break;

        case "C": //clear
            clear();
            break;

        case ",":
            valoresAct.push(".")
            displayValActuales(valoresAct);
            break;

        case "Delete":

            borrar();
            break;
    }
    if (event.keyCode === 8) {
        borrar()
        displayValActuales(valoresAct);
    }
});