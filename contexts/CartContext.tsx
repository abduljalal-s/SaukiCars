// contexts/CartContext.tsx
'use client';

import { Car } from '@/types';
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';

interface CartContextType {
  cartItems: Car[];
  addToCart: (car: Car) => void;
  removeFromCart: (carId: number) => void;
  isInCart: (carId: number) => boolean;
  clearCart: () => void;
  cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<Car[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('autoelite_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Failed to load cart:', error);
      }
    }
    setIsLoaded(true);
  }, []);

  // Save cart to localStorage whenever it changes (but only after initial load)
  useEffect(() => {
    if (isLoaded && cartItems.length > 0) {
      localStorage.setItem('autoelite_cart', JSON.stringify(cartItems));
    } else if (isLoaded && cartItems.length === 0) {
      localStorage.removeItem('autoelite_cart');
    }
  }, [cartItems, isLoaded]);

  const addToCart = (car: Car) => {
    const alreadyExists = cartItems.find((item) => item.id === car.id);
    
    if (alreadyExists) {
      // Schedule toast for next tick to avoid render conflicts
      setTimeout(() => {
        toast.error('Vehicle already in favorites');
      }, 0);
      return;
    }

    setCartItems((prev) => [...prev, car]);
    
    // Schedule toast for next tick
    setTimeout(() => {
      toast.success(`${car.name} added to favorites!`);
    }, 0);
  };

  const removeFromCart = (carId: number) => {
    const car = cartItems.find((item) => item.id === carId);
    
    setCartItems((prev) => prev.filter((item) => item.id !== carId));
    
    if (car) {
      // Schedule toast for next tick
      setTimeout(() => {
        toast.success(`${car.name} removed from favorites`);
      }, 0);
    }
  };

  const isInCart = (carId: number) => {
    return cartItems.some((item) => item.id === carId);
  };

  const clearCart = () => {
    if (cartItems.length > 0) {
      setCartItems([]);
      
      // Schedule toast for next tick
      setTimeout(() => {
        toast.success('All favorites cleared');
      }, 0);
    }
  };

  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        isInCart,
        clearCart,
        cartCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}