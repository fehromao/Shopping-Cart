require('../mocks/fetchSimulator');
const { fetchItem } = require('../helpers/fetchItem');
const item = require('../mocks/item');

describe('2 - Teste a função fecthItem', () => {
  it('Testa se fetchItem é uma função', () => {
    expect(typeof fetchItem).toBe('function');
  });

  it('Testa se ao executar a função fetchItem com argumento MLB1615760527, teste se função fetch sera chamada', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalled();
  })

  it('Testa se ao executar a função fetchItem com argumento MLB1615760527, a função fetch utiliza o endpoint "https://api.mercadolibre.com/items/MLB1615760527"', async () => {
    await fetchItem('MLB1615760527')
    expect(fetch).toHaveBeenCalledWith("https://api.mercadolibre.com/items/MLB1615760527");
  })

  it('Testa se ao executar a função fetchItem com argumento MLB1615760527', async () => {
    const functionreturn = await fetchItem('MLB1615760527');
    expect(functionreturn).toEqual(item);
  })

  it('Testa se ao executar a função fetchItem sem argumento retorna um erro com a mensagem: You must provide an url', async () => {
    const functionReturn = await fetchItem()
    expect(functionReturn).toEqual(new Error('You must provide an url'));
  })
});
