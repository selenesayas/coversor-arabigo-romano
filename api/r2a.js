export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { roman } = req.query;

  if (!roman || !/^[IVXLCDM]+$/.test(roman.toUpperCase())) {
    return res.status(400).json({ error: "Romano inválido" });
  }

  const map = {
    I: 1, V: 5, X: 10, L: 50,
    C: 100, D: 500, M: 1000
  };

  let total = 0;
  let prev = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const value = map[roman[i]];
    if (value < prev) total -= value;
    else total += value;
    prev = value;
  }

  return res.status(200).json({ arabic: total });
}

