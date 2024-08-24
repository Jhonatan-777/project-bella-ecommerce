// "use client";

import styled from "styled-components";

const ContainerOffer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;

  background-color: ${({ theme }) => theme.colors.attention};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

export default function Offer() {
  return (
    <ContainerOffer>
      <a href="#">
        12% OFF em TODO o Site + Frete GRÁTIS, cupom: PRIMEIRACOMPRA. Condições
        em promoções
      </a>
    </ContainerOffer>
  );
}
