"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useLocalStorage } from "@/data/hooks/useLocalStorage";
import Product from "@/data/model/Product";

interface CartItem extends Product {
  quantity: number;
}

interface CartContextProps {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  updateCartItem: (itemId: number, quantity: number) => void;
  removeCartItem: (itemId: number) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [value, setValue] = useLocalStorage<CartItem[]>("cart-items", []); // Persistência local
  const [cartItems, setCartItems] = useState<CartItem[]>(value);

  useEffect(() => {
    setCartItems(value);
  }, [value]);

  // Função para adicionar um item ao carrinho
  const addToCart = (newItem: CartItem) => {
    setCartItems((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === newItem.id);

      if (existingItem) {
        const updatedCart = prevCart.map((item) =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
        setValue(updatedCart);
        return updatedCart;
      }

      const updatedCart = [...prevCart, newItem];
      setValue(updatedCart);
      return updatedCart;
    });
  };

  // Função para atualizar a quantidade de um item no carrinho
  const updateCartItem = (itemId: number, quantity: number) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === Number(itemId) ? { ...item, quantity } : item
      );
      setValue(updatedCart);
      return updatedCart;
    });
  };

  // Função para remover um item do carrinho
  const removeCartItem = (itemId: number) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.filter((item) => item.id !== Number(itemId));
      setValue(updatedCart);
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateCartItem, removeCartItem }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
