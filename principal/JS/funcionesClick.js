c.addEventListener('click', function () {
    clear();
})

btn1.addEventListener('click', function () {
    valoresAct.push(btn1.value)
    displayValActuales(valoresAct);
});
btn2.addEventListener('click', function () {
    valoresAct.push(btn2.value)
    displayValActuales(valoresAct);
});
btn3.addEventListener('click', function () {
    valoresAct.push(btn3.value)
    displayValActuales(valoresAct);
});
btn4.addEventListener('click', function () {
    valoresAct.push(btn4.value)
    displayValActuales(valoresAct);
});
btn5.addEventListener('click', function () {
    valoresAct.push(btn5.value)
    displayValActuales(valoresAct);
});
btn6.addEventListener('click', function () {
    valoresAct.push(btn6.value)
    displayValActuales(valoresAct);
});
btn7.addEventListener('click', function () {
    valoresAct.push(btn7.value)
    displayValActuales(valoresAct);
});
btn8.addEventListener('click', function () {
    valoresAct.push(btn8.value)
    displayValActuales(valoresAct);
});
btn9.addEventListener('click', function () {
    valoresAct.push(btn9.value)
    displayValActuales(valoresAct);
});
btn0.addEventListener('click', function () {
    valoresAct.push(btn0.value)
    displayValActuales(valoresAct);
});

erase.addEventListener('click', function () {
    borrar();
    displayValActuales(valoresAct);
});

suma.addEventListener('click', function () {
    botonOp(1);
});
divide.addEventListener('click', function () {
    botonOp(4);
});

resta.addEventListener('click', function () {
    botonOp(2);

});
multiplica.addEventListener('click', function () {
    botonOp(3);

});

igual.addEventListener('click', function () {
    realizarOp();
    displayValActuales(valoresAct);
    agregarHistorial();
    clear();

});