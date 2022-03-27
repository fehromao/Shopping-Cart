function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

function createProductItemElement({ sku, name, image }) {
  const section = document.createElement('section');
  section.className = 'item';
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));
  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.remove();
}

function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

function addToCartEvents() {
  const buttons = document.querySelectorAll('.item__add');
  buttons.forEach((buttom) => {
    buttom.addEventListener('click', async function nome(event) {
      const id = getSkuFromProductItem(event.target.parentNode);
      const product = await fetchItem(id);
      const { title, price } = product;
      const cartItem = createCartItemElement({ sku: id, name: title, salePrice: price });
      const cartList = document.querySelector('.cart__items');
      cartList.appendChild(cartItem);
    });
  }); 
}

window.onload = async () => {
  const list = document.querySelector('.items');
  const productsList = await fetchProducts('computador');
  productsList.forEach(({ id, title, thumbnail }) => {
    const productCard = createProductItemElement({ sku: id, name: title, image: thumbnail });
    list.appendChild(productCard);
  });

  addToCartEvents();
};
