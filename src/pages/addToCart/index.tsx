import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import MenuHeader from '@/components/header';
import { FooterWithSitemap } from '@/components/footer';

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
};

const CartPage = () => {
  const [cartItems, setCartItems] = useState<Product[]>([]);

  // Carregar os itens do carrinho do localStorage ao iniciar a página
  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(storedCartItems);
  }, []);

  // Função para remover um item do carrinho
  const removeFromCart = (productId: number) => {
    const updatedCart = cartItems.filter(item => item.id !== productId);
    setCartItems(updatedCart);
    localStorage.setItem('cartItems', JSON.stringify(updatedCart)); // Atualiza o localStorage após remover o item
  };

  // Função para calcular o total do carrinho
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div>
      <MenuHeader user={null} isLoggedIn={false} />
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-semibold mb-4">Carrinho de Compras</h1>

        {cartItems.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <div>
            {cartItems.map(item => (
              <div key={item.id} className="flex items-center justify-between border-b border-gray-300 py-2">
                <div>
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-gray-700">{item.description}</p>
                </div>
                <div>
                  <p className="text-gray-900 text-lg font-semibold">${item.price}</p>
                  <button
                    className="text-red-500 hover:underline"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remover
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <p className="text-2xl font-semibold">Total: ${calculateTotal()}</p>
            </div>
            <Link href="/checkout">
              Finalizar Compra
              
            </Link>
          </div>
        )}
      </div>
      <FooterWithSitemap />
    </div>
  );
};

export default CartPage;
