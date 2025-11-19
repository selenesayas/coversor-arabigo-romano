export default function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { arabic } = req.query;

  if (!arabic || isNaN(arabic) || arabic.includes(".")) {
    return res.status(400).json({ error: "Número inválido" });
  }

  const num = parseInt(arabic);
  const map = [
    { val: 1000, sym: "M" },
    { val: 900, sym: "CM" },
    { val: 500, sym: "D" },
    { val: 400, sym: "CD" },
    { val: 100, sym: "C" },
    { val: 90, sym: "XC" },
    { val: 50, sym: "L" },
    { val: 40, sym: "XL" },
    { val: 10, sym: "X" },
    { val: 9, sym: "IX" },
    { val: 5, sym: "V" },
    { val: 4, sym: "IV" },
    { val: 1, sym: "I" }
  ];

  let result = "";
  let n = num;

  for (let i of map) {
    while (n >= i.val) {
      result += i.sym;
      n -= i.val;
    }
  }

  return res.status(200).json({ roman: result });
}
