// "use client";

import styled from "styled-components";
import HeaderAuth from "./auth/auth";
import HeaderFavorites from "./favorites/favorites";
import HeaderCart from "./cart/cart";

const ContainerHeaderObserve = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

export default function ObserveRegister() {
  return (
    <ContainerHeaderObserve>
      <HeaderAuth />
      <HeaderFavorites />
      <HeaderCart />
    </ContainerHeaderObserve>
  );
}
