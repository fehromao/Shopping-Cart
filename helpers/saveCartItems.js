const saveCartItems = () => {
  localStorage.setItem('cartItems', document.querySelector('.cart__items').innerHTML);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
