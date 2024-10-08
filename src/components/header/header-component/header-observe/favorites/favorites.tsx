// "use client";

import Link from "next/link";
import styled from "styled-components";
import { FavoritesControl } from "./favorites-control";

const ContainerHeaderFavorites = styled.div`
  a {
    display: flex;
    gap: 4px;
    line-height: 20px;

    color: ${({ theme }) => theme.colors.neutralColorStrong};
    font-size: ${({ theme }) => theme.fontSizes.s};
  }
`;

export default function HeaderFavorites() {
  return (
    <ContainerHeaderFavorites>
      <Link href="#">
        favoritos
        <FavoritesControl />
      </Link>
    </ContainerHeaderFavorites>
  );
}
