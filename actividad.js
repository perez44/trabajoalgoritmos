//1. Algoritmo para imprimir números del 1 al 10
for (let i =1; i<=10; i++){
    console.log(i);
}



//2. Algoritmo para sumar los primeros 10 números
let suma = 0;
for (let i = 1; i <= 10; i++) {
    suma += i;
}
console.log(suma);


//3. Algoritmo para generar la tabla de un numero dado por argumento en una función
function tablaMultiplicar(numero) {
    for (let i = 1; i <=10; i++) {
        console.log(numero + ' x ' + i + ' = '+ (numero * i));
    }
}    
tablaMultiplicar(5);


//4. Algoritmo para contar ocurrencias de 'a' en un texto



function contarA(texto) {
    let contador = 0;
    let contar = texto.toLowerCase();

    for (let i = 0; i < texto.length; i++) {
        if (texto[i] === 'a') {
            contador++;
            console.log('Numero de a encontradas es = ' + contador);

        }
    }
    return contador;
}
contarA('Juan angel es cacorrro y mariguanin');


//5. Algoritmo para calcular el factorial de un número
function calculaFactorial(numero) {
    let factorial = 1;
    for (let i = 2; i <= numero; i++) {
        factorial *= i;
    }
    console.log('El factorial de ' + numero + ' es: ' + factorial);

    return factorial;

}
calculaFactorial(5);

// 6. Escribe una función que reciba un array de números y devuelva un nuevo array que contenga solo los números pares.
function filtrarPares(numeros) {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            console.log('----------------------------')
            console.log('el numero ' + numeros[i] + ' es par');
        }
    }
    return pares;
}
filtrarPares([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//7. Implementa una función que calcule la suma de los cuadrados de los primeros N números naturales.

function sumaCuadrados(n) {
    let suma = 0;
    for (let i = 1; i <= n; i++) {
        suma += i * i;
    }
    return suma;
}
console.log(sumaCuadrados(5));

//8. Escribe una función que calcule la potencia de un número (base^exponente) utilizando un ciclo for, sin usar el operador de potencia
function potencia(base, exponente) {
    let resultado = 1;
    for (let i = 0; i < exponente; i++) {
        resultado *= base;
    }
    return resultado;
}
console.log(potencia(2, 3));

//9. Desarrolla una función que genere y devuelva los primeros N términos de la serie de Fibonacci.
function fibonacci(n) {
    let secuencia = [];
    let a = 0;
    let b = 1;
    for (let i = 0; i < n; i++) {
        secuencia.push(a);
        let siguiente = a + b;
        a = b;
        b = siguiente;
    }
    return secuencia;
}
console.log(fibonacci(5));

//10. Desarrolla una función que genere el total de las tablas de multiplicar dado un numero entero.
function tablaMultiplicarTotal(numero) {
    let total = 0;
    for (let i = 1; i <= 10; i++) {
        total += numero * i;
    }
    console.log('La suma total de la tabla de multiplicar de ' + numero + ' es: ' + total);
    return total;
}
tablaMultiplicarTotal(5);
