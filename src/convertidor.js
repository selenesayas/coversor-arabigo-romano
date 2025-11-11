// src/conversor.js

// Conversión de número arábigo a romano
function arabigoARomano(num) {
    if (!Number.isInteger(num) || num <= 0 || num >= 4000) {
        throw new Error("El número debe ser entero y entre 1 y 3999");
    }

    const valores = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    const simbolos = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    let resultado = "";
    for (let i = 0; i < valores.length; i++) {
        while (num >= valores[i]) {
            num -= valores[i];
            resultado += simbolos[i];
        }
    }
    return resultado;
}

// Conversión de número romano a arábigo
function romanoAArabigo(romano) {
    const mapa = {
        I: 1, V: 5, X: 10, L: 50,
        C: 100, D: 500, M: 1000
    };

    let total = 0;
    let prev = 0;

    for (let i = romano.length - 1; i >= 0; i--) {
        const valor = mapa[romano[i].toUpperCase()];
        if (!valor) throw new Error("Número romano inválido");

        if (valor < prev) {
            total -= valor;
        } else {
            total += valor;
        }
        prev = valor;
    }
    return total;
}

module.exports = { arabigoARomano, romanoAArabigo };
