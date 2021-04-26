export const addCartItem = (cartItems, cartItemToAdd) => {
  const cartExists = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (cartExists) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : { ...cartItem }
    );
  }
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

export const removeCartItem = (cartItems, cartItemToRemove) => {
  const cartItemExists = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );
  if (cartItemExists.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItemExists ? { ...cartItem, quantity: (cartItem.quantity - 1) } : cartItem
  );
};
