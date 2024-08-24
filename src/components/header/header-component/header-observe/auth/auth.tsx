// "use client";

import Link from "next/link";
import styled from "styled-components";

const ContainerHeaderAuth = styled.div`
  a {
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.neutralColorStrong};
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export default function HeaderAuth() {
  return (
    <ContainerHeaderAuth>
      <Link href="#">Entrar</Link>
    </ContainerHeaderAuth>
  );
}
