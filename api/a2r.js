export default function handler(req, res) {
  const numero = parseInt(req.query.numero, 10);

  if (isNaN(numero) || numero < 1 || numero > 3999) {
    return res.status(400).json({ error: "Número inválido (1–3999)" });
  }

  const valores = [
    { valor: 1000, letra: "M" },
    { valor: 900, letra: "CM" },
    { valor: 500, letra: "D" },
    { valor: 400, letra: "CD" },
    { valor: 100, letra: "C" },
    { valor: 90, letra: "XC" },
    { valor: 50, letra: "L" },
    { valor: 40, letra: "XL" },
    { valor: 10, letra: "X" },
    { valor: 9, letra: "IX" },
    { valor: 5, letra: "V" },
    { valor: 4, letra: "IV" },
    { valor: 1, letra: "I" }
  ];

  let resultado = "";
  let n = numero;

  for (const { valor, letra } of valores) {
    while (n >= valor) {
      resultado += letra;
      n -= valor;
    }
  }

  res.json({ resultado });
}
