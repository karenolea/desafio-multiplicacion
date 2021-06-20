// definir variables
var numero = 0;

// ciclo para solicitar el numero de veces
while (true) {
      numero = parseInt(prompt("ingrese un número"));
    if (numero >= 1 && numero <= 20) { // validacion
        break;
    } else {
        console.log("Fuera de rango");
    }
}

//funcion flecha
var factorial = (x) => {
    let j = 1
    for (let i = 1; i <= x; i ++) {
        j = j * i;
        console.log(`factorial de ${i} es : ${j}`);
    }
}

//iterador multiplica el numero ingresado por el mismo numero como contador
for (let i = 1; i <= numero ; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`); 
};
//accion que llama la funcion flecha
factorial(numero);



