import { useState } from "react";
import ProductCard from "@/components/header/ProductCard";

const products = [
  { id: 1, name: "Produto 1", price: 50 },
  { id: 2, name: "Produto 2", price: 100 },
  { id: 3, name: "Produto 3", price: 150 },
];

interface TesteProps {
  cartCount: number;
  onAddToCart: () => void;
}

const Teste: React.FC<TesteProps> = ({ cartCount, onAddToCart }) => {
  return (
    <div>
      <h1>Loja de Produtos</h1>
      <p>Carrinho: {cartCount} itens</p>
      <div>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default Teste;
