require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {

  it('Testa se fetchProducts é uma função', () => {
    expect(typeof fetchProducts).toBe('function');
  });

  it('Testa se ao executar a função fetchProducts com argumento computador ela sera chamada', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalled();
  });

  it('Testa se ao executar a função fetchProducts com argumento computador, a função fetch utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', async () => {
    await fetchProducts('computador')
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/sites/MLB/search?q=computador");
  });

  it('Testa se ao executar a função fetchProducts com argumento computador, o retorno é uma estrutura de dados igual ao objeto computadorSearch', async () => {
    const functionreturn = await fetchProducts('computador')
    expect(functionreturn).toEqual(computadorSearch);
  });

  it('Testa se ao executar a função fetchProducts sem argumento retorna um erro com a mensagem: You must provide an url', async () => {
    const functionreturn = await fetchProducts()
    expect(functionreturn).toEqual(new Error('You must provide an url'));
  });

});
