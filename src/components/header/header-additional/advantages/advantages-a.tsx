// "use client";

import styled from "styled-components";

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

export default function Advantages() {
  return (
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
  );
}
