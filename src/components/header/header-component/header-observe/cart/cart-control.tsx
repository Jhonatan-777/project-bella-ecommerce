import { CartIcon } from "@/components/ui/icons/cart-icon";
import { useLocalStorage } from "@/data/hooks/useLocalStorage";
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
  const [value] = useLocalStorage<string[]>("cart-items", []);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // Evita renderizar no lado do servidor
    return null;
  }

  return (
    <Container>
      <CartIcon />
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  );
}
