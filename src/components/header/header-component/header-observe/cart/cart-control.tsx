import { CartIcon } from "@/components/ui/icons/cart-icon";
import { useCart } from "@/data/contexts/CartContext";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  position: relative;
  display: flex;

  svg {
    width: 20px;
    height: 20px;
  }
`;

const CartCount = styled.span`
  width: 16px;
  height: 16px;

  margin: -6px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.primaryColor010};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
`;

export function CartControl() {
  const { cartItems } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const totalItems = cartItems.reduce(
    (total, product) => total + product.quantity,
    0
  );

  return (
    <Container>
      <CartIcon />
      {totalItems > 0 && <CartCount>{totalItems}</CartCount>}
      {/* Aqui você pode adicionar um botão para testar a adição de itens */}
    </Container>
  );
}
