import { arabigoARomano } from "../src/conversor.js";

// Función para manejar CORS correctamente
function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default function handler(req, res) {
  setCorsHeaders(res);

  if (req.method === "OPTIONS") {
    // Respuesta para preflight request
    return res.status(200).end();
  }

  if (req.method !== "GET") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const arabic = parseInt(req.query.arabic);

  if (!arabic || arabic <= 0 || arabic >= 4000) {
    return res.status(400).json({ error: "Número inválido" });
  }

  try {
    const roman = arabigoARomano(arabic);
    res.status(200).json({ roman });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
}



