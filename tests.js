// tests/conversor.test.js
const { arabigoARomano, romanoAArabigo } = require("../src/conversor");

describe("Conversor de números", () => {
    // Arábigo -> Romano
    test("1 -> I", () => {
        expect(arabigoARomano(1)).toBe("I");
    });

    test("3999 -> MMMCMXCIX", () => {
        expect(arabigoARomano(3999)).toBe("MMMCMXCIX");
    });

    test("Número decimal lanza error", () => {
        expect(() => arabigoARomano(3.5)).toThrow();
    });

    test("Número negativo lanza error", () => {
        expect(() => arabigoARomano(-5)).toThrow();
    });

    test("Número cero lanza error", () => {
        expect(() => arabigoARomano(0)).toThrow();
    });

    // Romano -> Arábigo
    test("I -> 1", () => {
        expect(romanoAArabigo("I")).toBe(1);
    });

    test("MMMCMXCIX -> 3999", () => {
        expect(romanoAArabigo("MMMCMXCIX")).toBe(3999);
    });

    test("Romano inválido lanza error", () => {
        expect(() => romanoAArabigo("ABCD")).toThrow();
    });

    test("Romano con minúsculas funciona", () => {
        expect(romanoAArabigo("mcmxcix")).toBe(1999);
    });

    test("Conversión de número simple", () => {
        expect(romanoAArabigo(arabigoARomano(58))).toBe(58);
    });
});
