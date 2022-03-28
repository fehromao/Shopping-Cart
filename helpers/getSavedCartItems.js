const getSavedCartItems = () => {
  const cartItems = localStorage.getItem('cartItems');
  const list = document.querySelector('.cart__items');
  list.innerHTML = cartItems;
};

if (typeof module !== 'undefined') {
  module.exports = getSavedCartItems;
}
