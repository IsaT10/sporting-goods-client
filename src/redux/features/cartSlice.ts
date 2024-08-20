// src/redux/slices/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  brand: string;
  category: string;
  quantity: number;
  stock: number;
}

interface CartState {
  items: CartItem[];
}

// Load cart from local storage or use an empty array if not available
const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]'),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CartItem>) => {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
      // Save updated cart to local storage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      // Save updated cart to local storage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
    clearCart: (state) => {
      state.items = [];
      localStorage.removeItem('cart');
    },
    updateQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity = action.payload.quantity;
      }
      // Sync with localStorage
      localStorage.setItem('cart', JSON.stringify(state.items));
    },
  },
});

export const { addItem, removeItem, clearCart, updateQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
