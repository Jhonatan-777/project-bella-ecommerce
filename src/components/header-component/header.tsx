"use client";

import styled from "styled-components";
import { Logo } from "../logo-component/logo";
import { Sansita_Swashed } from "next/font/google";

const sansita = Sansita_Swashed({
  weight: ["700"],
  subsets: ["latin"],
});

interface HeaderProps {}

const TagHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const ContainerOffer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;

  background-color: ${({ theme }) => theme.colors.attention};
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.s};
`;

const ContainerAdvantages = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;

  background: ${({ theme }) => theme.colors.neutralColorLight};
  color: ${({ theme }) => theme.colors.neutralColor};
  font-size: ${({ theme }) => theme.fontSizes.xs};

  ul {
    width: 90%;

    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;

    list-style: none;
  }
`;

const ContainerHeader = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #c5bbbb;

  padding: 10px;
`;

export function Header(props: HeaderProps) {
  return (
    <TagHeader>
      <ContainerOffer>
        <a href="#">
          12% OFF em TODO o Site + Frete GRÁTIS, cupom: PRIMEIRACOMPRA.
          Condições em promoções
        </a>
      </ContainerOffer>
      <ContainerAdvantages>
        <ul>
          <li>Frete grátis*</li>
          <li>Troca grátis</li>
          <li>Coleta para trocas</li>
          <li>Até 10x sem juros</li>
          <li>Entrega rápida</li>
          <li>Moda Sustentável</li>
          <li>Atendimento</li>
        </ul>
      </ContainerAdvantages>
      <ContainerHeader>
        <Logo className={sansita.className}>
          Bell<span>a</span>
        </Logo>
      </ContainerHeader>
    </TagHeader>
  );
}
