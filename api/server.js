const express = require("express");
const app = express();
const PORT = 3000;

// Convertir arábigo → romano
function arabigoARomano(num) {
    const valores = [
        [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"],
        [100, "C"], [90, "XC"], [50, "L"], [40, "XL"],
        [10, "X"], [9, "IX"], [5, "V"], [4, "IV"], [1, "I"]
    ];

    let resultado = "";
    for (let [valor, simbolo] of valores) {
        while (num >= valor) {
            resultado += simbolo;
            num -= valor;
        }
    }
    return resultado;
}

// Convertir romano → arábigo
function romanoAArabigo(romano) {
    const valores = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
    let total = 0, previo = 0;

    for (let letra of romano.toUpperCase().split("").reverse()) {
        const valor = valores[letra];
        if (!valor) return null;
        if (valor < previo) total -= valor;
        else total += valor;
        previo = valor;
    }
    return total;
}

// RUTA 1 → arábigo → romano
app.get("/a2r", (req, res) => {
    const numero = parseInt(req.query.numero);
    if (isNaN(numero)) return res.json({ error: "Número inválido" });

    res.json({ resultado: arabigoARomano(numero) });
});

// RUTA 2 → romano → arábigo
app.get("/r2a", (req, res) => {
    const romano = req.query.numero;
    const resultado = romanoAArabigo(romano);

    if (resultado === null) return res.json({ error: "Romano inválido" });

    res.json({ resultado });
});

// Servir la página index
app.use(express.static("./"));

app.listen(PORT, () =>
    console.log(`Servidor funcionando en http://localhost:${PORT}`)
);

