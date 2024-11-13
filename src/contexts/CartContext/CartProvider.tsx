import { createContext, PropsWithChildren, useState } from "react";
import { CartContextType, CartItem } from "./cartTypes";

export const CartContext = createContext<CartContextType | null>(null);

function CartProvider({ children }: PropsWithChildren) {
  const [items, setItems] = useState<CartItem[]>([]);

  function addToCart(newItem: CartItem) {
    setItems((prevItems) => {
      const itemIndex = prevItems.findIndex((item) => item.id === newItem.id);
      if (itemIndex > -1) {
        const newItems = [...prevItems];
        newItems[itemIndex].quantity += newItem.quantity;
        return newItems;
      }
      return [...prevItems, newItem];
    });
  }

  function removeFromCart(id: number) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
