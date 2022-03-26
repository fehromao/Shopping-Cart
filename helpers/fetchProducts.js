const fetchProducts = async (products) => {
  try {  
    const url = `https://api.mercadolibre.com/sites/MLB/search?q=${products}`;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.log(error.message);
  }
};

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
