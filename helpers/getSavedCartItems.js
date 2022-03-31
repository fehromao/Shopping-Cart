const getSavedCartItems = () => {
  const getcart = localStorage.getItem('cartItems');
    return getcart;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
