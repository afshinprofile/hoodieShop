export interface CartItem {
  id: number;
  name: string;
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: number) => void;
}
