// "use client";

import styled from "styled-components";

import { Sansita_Swashed } from "next/font/google";
import Link from "next/link";

const sansita = Sansita_Swashed({
  weight: ["700"],
  subsets: ["latin"],
});

interface LogoProps {
  color?: string;
}

const LogoContainer = styled.div<{ color?: string }>`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  color: ${({ color, theme }) => color || theme.colors.primaryColor010};
  display: flex;

  span {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;

export default function Logo({ color }: LogoProps) {
  return (
    <LogoContainer color={color}>
      <Link href="/shop" className={sansita.className}>
        Bell<span>a</span>
      </Link>
    </LogoContainer>
  );
}
