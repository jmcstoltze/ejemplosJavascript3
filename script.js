/* 1. Crea una función que calcule el índice de masa corporal (IMC) de una persona a partir de su altura en metros y peso en kilogramos, que se recibirán como parámetros.
2. Crea una función que calcule el valor del factorial de un número pasado como parámetro.
3. Crea una función que convierta un valor en dólares, pasado como parámetro, y devuelva el valor equivalente en pesos chilenos. Para esto, considera la cotización del dólar igual a $947.30.-
4. Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, utilizando la altura y la anchura que se proporcionarán como parámetros.
5. Crea una función que muestre en pantalla el área y el perímetro de una sala circular, utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
6. Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro. */

function calcularIMC(altura, peso) {
    const imc = peso / (altura * altura);
    return imc.toFixed(2);
}

const altura = parseFloat(prompt('Ingrese altura en metros: '));
const peso = parseFloat(prompt('Ingrese peso en kilogramos: '));

let msg = `El IMC es ${calcularIMC(altura, peso)}`;

function imprimirEnPantalla() {
    console.log(msg);
    alert(msg);
}

imprimirEnPantalla();

function calcularFactorial(n) {
    if (n === 0) {
        return 1;
    } else {
        return n * calcularFactorial(n - 1);
    }
}

const n = parseInt(prompt('Ingrese un número: '));
msg = `El factorial de ${n} es ${calcularFactorial(n)}`;

imprimirEnPantalla();

function calcularDolaresAPesos(valorEnDolares) {
    const valorDolar = 947.30;
    const valorEnPesos = valorEnDolares * valorDolar; 
    return valorEnPesos.toFixed(2);
}

const valorEnDolares = parseFloat(prompt('Ingrese valor en dólares: '));
msg = `US$ ${valorEnDolares} ${(valorEnDolares === 1) ? 'es' : 'son' } $ ${calcularDolaresAPesos(valorEnDolares)}`;

imprimirEnPantalla();

function calcularAreaYPerimetroRectangular(altura, anchura) {

    const area = Math.round((altura * anchura), 2);
    const perimetro = Math.round((2 * altura) + (2 * anchura), 2);

    console.log(area);
    console.log(perimetro);

    alert(`El área es ${area}`);
    alert(`El perímetro es ${perimetro}`);
}

const alt = parseInt(prompt('Ingrese la altura del rectángulo: '));
const anch = parseInt(prompt('Ingrese el ancho del rectángulo: '));

calcularAreaYPerimetroRectangular(alt, anch);

function calcularAreaYPerimetroCircular(radio) {

    const area = (Math.PI * radio * radio).toFixed(2);
    const perimetro = (2 * Math.PI * radio).toFixed(2);

    console.log(area);
    console.log(perimetro);

    alert(`El área es ${area}`);
    alert(`El perímetro es ${perimetro}`);
}

const radio = parseInt(prompt('Ingrese el radio del círculo: '));

calcularAreaYPerimetroCircular(radio);

function mostrarTablaMultiplicar(numero) {
    
    console.log(`Tabla de multiplicar del ${numero}:`);
    let tabla = `Tabla de multiplicar del ${numero}:\n`;
    
    for (let i = 1; i <= 10; i++) {
        let producto = numero * i;
        console.log(`${numero} x ${i} = ${producto}`);
        tabla += `${numero} x ${i} = ${producto}\n`;
    }
    alert(tabla);
}

const nro = parseInt(prompt('Ingrese un número: '));

mostrarTablaMultiplicar(nro);
