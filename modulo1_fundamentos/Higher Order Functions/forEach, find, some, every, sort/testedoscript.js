const multiplicaPorTres = require('./script');

describe('testa a função multiplicaPorTres', () => {
    teste('verifica se é uma função', () => {
        expect(typeof multiplicaPorTres).toBe('function');
    });

    teste('multiplica por três e imprime um array', () => {
        const numbers = [1, 2, 3, 4, 5];

        expect(multiplicaPorTres(numbers)).toEqual([3, 6, 9, 12, 15]);
    });
});