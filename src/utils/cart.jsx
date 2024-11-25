const CART_KEY = "cart";

export const getCart = () => {
  const storedCart = localStorage.getItem(CART_KEY);
  return storedCart ? JSON.parse(storedCart) : [];
};

export const saveCart = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const addItemToCart = (item) => {
  const cart = getCart();
  const existingItem = cart.find((cartItem) => cartItem.name === item.name);

  if (existingItem) {
    // Update quantity if the item already exists
    existingItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCart(cart);
  return cart;
};
