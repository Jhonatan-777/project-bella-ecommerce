// "use client";

import Link from "next/link";
import styled from "styled-components";

const ContainerHeaderFavorites = styled.div`
  a {
    color: ${({ theme }) => theme.colors.neutralColorStrong};
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export default function HeaderFavorites() {
  return (
    <ContainerHeaderFavorites>
      <Link href="#">favoritos</Link>
    </ContainerHeaderFavorites>
  );
}
