import React from "react";

interface ProductCardProps {
  product: { id: number; name: string; price: number };
  onAddToCart: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
      <h3>{product.name}</h3>
      <p>Preço: R${product.price}</p>
      <button onClick={onAddToCart}>Comprar</button>
    </div>
  );
};

export default ProductCard;
