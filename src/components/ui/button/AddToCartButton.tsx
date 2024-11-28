import { useCart } from "@/data/contexts/CartContext";
import StyledButton from "./StyledButton";
import Product from "@/data/model/Product";

interface AddToCartButtonProps {
  product: Product;
  quantity?: number;
}

export function AddToCartButton({
  product,
  quantity = 1,
}: AddToCartButtonProps) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      ...product,
      quantity,
    });
  };

  return <StyledButton onClick={handleAddToCart}>Comprar</StyledButton>;
}
