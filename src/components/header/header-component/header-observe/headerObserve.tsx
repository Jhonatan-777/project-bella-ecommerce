// "use client";

import styled from "styled-components";
import HeaderAuth from "./auth/auth";
import HeaderFavorites from "./favorites/favorites";

const ContainerHeaderObserve = styled.div`
  display: flex;
  gap: 40px;
`;

export default function ObserveRegister() {
  return (
    <ContainerHeaderObserve>
      <HeaderAuth />
      <HeaderFavorites />
      {/* <Cart /> */}
    </ContainerHeaderObserve>
  );
}
