export default function handler(req, res) {
  const romano = req.query.numero?.toUpperCase();

  if (!romano || !/^[MDCLXVI]+$/.test(romano)) {
    return res.status(400).json({ error: "Romano inválido" });
  }

  const valores = {
    M: 1000, D: 500, C: 100, L: 50,
    X: 10, V: 5, I: 1
  };

  let total = 0;

  for (let i = 0; i < romano.length; i++) {
    const actual = valores[romano[i]];
    const siguiente = valores[romano[i + 1]];

    if (siguiente && actual < siguiente) {
      total += siguiente - actual;
      i++;
    } else {
      total += actual;
    }
  }

  res.json({ resultado: total });
}
