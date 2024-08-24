// "use client";

import Link from "next/link";
import styled from "styled-components";
import { CartControl } from "./cart-control";

const ContainerHeaderCart = styled.div`
  a {
    display: flex;
    gap: 2px;
    line-height: 20px;

    color: ${({ theme }) => theme.colors.neutralColorStrong};
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export default function HeaderCart() {
  return (
    <ContainerHeaderCart>
      <Link href="#">
        sacola
        <CartControl />
      </Link>
    </ContainerHeaderCart>
  );
}
