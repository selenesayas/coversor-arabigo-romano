import { romanoAArabigo } from "../src/conversor.js";

function setCorsHeaders(res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default function handler(req, res) {
    setCorsHeaders(res);

    if (req.method === "OPTIONS") return res.status(200).end();
    if (req.method !== "GET") return res.status(405).json({ error: "Método no permitido" });

    const roman = req.query.roman;
    if (!roman) return res.status(400).json({ error: "Número romano inválido" });

    try {
        const arabic = romanoAArabigo(roman);
        res.status(200).json({ arabic });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
}

