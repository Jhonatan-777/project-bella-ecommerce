// "use client";

import styled from "styled-components";

import { Sansita_Swashed } from "next/font/google";
import Link from "next/link";

const sansita = Sansita_Swashed({
  weight: ["700"],
  subsets: ["latin"],
});

const LogoContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ theme }) => theme.colors.primaryColor010};
  cursor: pointer;

  span {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;

export default function Logo() {
  return (
    <LogoContainer>
      <Link href="/shop" className={sansita.className}>
        Bell<span>a</span>
      </Link>
    </LogoContainer>
  );
}
